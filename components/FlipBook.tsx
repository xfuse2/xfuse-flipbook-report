import React, { useEffect, useRef, useState } from 'react';
import { Page } from './Page';
import { pages } from '../data';
import { PageFlipInstance } from '../types';

export const FlipBook: React.FC = () => {
  const bookRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlipInstance | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!bookRef.current || !window.St) return;

    // Check if we have pages to load
    const pageElements = bookRef.current.querySelectorAll('.page-wrapper');
    if (!pageElements || pageElements.length === 0) return;

    // Determine dimensions based on viewport
    const isMobile = window.innerWidth < 768;
    
    // Initialize PageFlip
    // We use a small timeout to ensure DOM is fully ready and painted, helping avoid "Script error" on some engines
    const timer = setTimeout(() => {
      try {
        if (!bookRef.current) return;
        
        const pageFlip = new window.St.PageFlip(bookRef.current, {
          width: isMobile ? window.innerWidth * 0.9 : 450, // width per page
          height: isMobile ? window.innerHeight * 0.7 : 650,
          size: 'stretch',
          minWidth: 300,
          maxWidth: 1000,
          minHeight: 400,
          maxHeight: 1200,
          maxShadowOpacity: 0.5,
          showCover: true, // Crucial for the realistic book feel
          mobileScrollSupport: false, // Prevent scroll interference
          startPage: 0,
          usePortrait: isMobile // True forces single page view
        });

        // Load pages from the wrappers we created
        pageFlip.loadFromHTML(pageElements as unknown as NodeListOf<Element>);

        setTotalPages(pageFlip.getPageCount());

        // Event Listeners
        pageFlip.on('flip', (e) => {
          setCurrentPage(e.data);
        });

        pageFlipRef.current = pageFlip;

      } catch (error) {
        console.error("Failed to initialize FlipBook:", error);
      }
    }, 50);

    // Cleanup
    return () => {
      clearTimeout(timer);
      if (pageFlipRef.current) {
        pageFlipRef.current.destroy();
        pageFlipRef.current = null;
      }
    };
  }, []); // Run once on mount

  const handleNext = () => {
    pageFlipRef.current?.flipNext();
  };

  const handlePrev = () => {
    pageFlipRef.current?.flipPrev();
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto h-[90vh] md:h-screen p-4">
      {/* Book Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* We give the container a specific style to ensure PageFlip has a valid target even before init */}
        <div ref={bookRef} className="flip-book shadow-2xl" style={{ display: 'block' }}>
          {pages.map((page) => (
            <div 
              key={page.id} 
              className="page-wrapper bg-xfuse-card"
              // PageFlip reads data-density from here, the direct child of the book container
              data-density={page.type === 'cover' || page.type === 'back-cover' ? 'hard' : 'soft'}
            >
              <Page page={page} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 md:bottom-8 z-20 flex items-center gap-6 bg-slate-900/80 backdrop-blur px-6 py-3 rounded-full border border-slate-700 shadow-xl">
        <button 
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="p-2 rounded-full hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition text-xfuse-accent"
          aria-label="Previous Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>

        <span className="text-sm font-mono text-slate-300 min-w-[80px] text-center">
          {currentPage + 1} / {totalPages || pages.length}
        </span>

        <button 
          onClick={handleNext}
          disabled={totalPages > 0 && currentPage === totalPages - 1}
          className="p-2 rounded-full hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition text-xfuse-accent"
          aria-label="Next Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
      </div>
      
      {/* Instructions Overlay (Fades out) */}
      <div className="absolute top-4 right-4 text-xs text-slate-500 animate-pulse hidden md:block">
        اضغط على أطراف الصفحة أو استخدم الأسهم للتقليب
      </div>
    </div>
  );
};