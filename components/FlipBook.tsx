import React, { useEffect, useRef, useState } from 'react';
import { Page } from './Page';
import { pages } from '../data';
import { PageFlipInstance } from '../types';

export const FlipBook: React.FC = () => {
  const bookRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlipInstance | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  // Track mobile state to trigger re-initialization only when crossing the breakpoint
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile((prev) => {
        if (prev !== mobile) return mobile;
        return prev;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!bookRef.current || !window.St) return;

    // Check if we have pages to load
    const pageElements = bookRef.current.querySelectorAll('.page-wrapper');
    if (!pageElements || pageElements.length === 0) return;

    // Helper to cleanup existing instance
    const cleanup = () => {
      if (pageFlipRef.current) {
        try {
          pageFlipRef.current.destroy();
        } catch (e) {
          console.warn('Error destroying PageFlip instance', e);
        }
        pageFlipRef.current = null;
      }
    };

    // Initialize PageFlip
    const timer = setTimeout(() => {
      try {
        if (!bookRef.current) return;
        
        cleanup(); // Ensure clean slate

        const pageFlip = new window.St.PageFlip(bookRef.current, {
          width: isMobile ? 380 : 450, // Base width
          height: isMobile ? 600 : 650, // Base height
          size: 'stretch',
          minWidth: 280,
          maxWidth: 1000,
          minHeight: 350,
          maxHeight: 1200,
          maxShadowOpacity: 0.5,
          showCover: true,
          mobileScrollSupport: false,
          startPage: currentPage, // Maintain page on resize
          usePortrait: isMobile // True forces single page view
        });

        // Load pages from the wrappers we created
        pageFlip.loadFromHTML(pageElements as unknown as NodeListOf<Element>);

        // Update total pages once loaded
        setTotalPages(pageFlip.getPageCount());

        // Event Listeners
        pageFlip.on('flip', (e) => {
          setCurrentPage(e.data);
        });

        pageFlipRef.current = pageFlip;

      } catch (error) {
        console.error("Failed to initialize FlipBook:", error);
      }
    }, 100); // Slightly longer delay to ensure layout stability

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [isMobile]); // Re-run effect only when switching between mobile/desktop

  const handleNext = () => {
    pageFlipRef.current?.flipNext();
  };

  const handlePrev = () => {
    pageFlipRef.current?.flipPrev();
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto h-[90vh] md:h-screen p-2 md:p-4">
      {/* Book Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div 
          ref={bookRef} 
          className="flip-book shadow-2xl" 
          style={{ display: 'block', width: '100%', height: '100%', minHeight: '400px' }}
        >
          {pages.map((page) => (
            <div 
              key={page.id} 
              className="page-wrapper bg-xfuse-card"
              data-density={page.type === 'cover' || page.type === 'back-cover' ? 'hard' : 'soft'}
            >
              <Page page={page} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 md:bottom-8 z-20 flex items-center gap-4 md:gap-6 bg-slate-900/90 backdrop-blur px-4 py-2 md:px-6 md:py-3 rounded-full border border-slate-700 shadow-xl touch-manipulation">
        <button 
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="p-2 rounded-full hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition text-xfuse-accent active:scale-95"
          aria-label="Previous Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>

        <span className="text-sm font-mono text-slate-300 min-w-[60px] md:min-w-[80px] text-center select-none">
          {currentPage + 1} / {totalPages || pages.length}
        </span>

        <button 
          onClick={handleNext}
          disabled={totalPages > 0 && currentPage === totalPages - 1}
          className="p-2 rounded-full hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition text-xfuse-accent active:scale-95"
          aria-label="Next Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
      </div>
      
      {/* Instructions Overlay (Fades out) */}
      <div className="absolute top-4 right-4 text-xs text-slate-500 animate-pulse hidden md:block pointer-events-none">
        اضغط على أطراف الصفحة أو استخدم الأسهم للتقليب
      </div>
    </div>
  );
};
