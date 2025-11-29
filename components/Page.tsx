import React, { forwardRef } from 'react';
import { PageContent } from '../types';

interface PageProps {
  page: PageContent;
  className?: string;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(({ page, className }, ref) => {
  const isCover = page.type === 'cover' || page.type === 'back-cover';

  return (
    <div 
      ref={ref} 
      className={`relative h-full w-full overflow-hidden shadow-inner ${className} ${isCover ? 'bg-xfuse-dark' : 'bg-xfuse-card'}`}
    >
      {/* Page Texture/Overlay for realism */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10 opacity-50 mix-blend-multiply"></div>
      
      {/* Content Container */}
      <div className={`h-full flex flex-col p-4 md:p-6 ${isCover ? 'border-4 border-slate-800' : 'border-x border-slate-800/30'}`}>
        
        {/* Header (Page Number & Title) - Only for content pages */}
        {!isCover && (
          <div className="flex justify-between items-center mb-4 md:mb-6 border-b border-slate-700/50 pb-2">
            <h2 className="text-base md:text-lg font-bold text-xfuse-accent uppercase tracking-wider truncate max-w-[80%]">
              {page.title}
            </h2>
            <span className="text-slate-500 font-mono text-xs md:text-sm">{page.pageNumber}</span>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-grow relative z-0 overflow-y-auto scrollbar-hide">
          {page.content}
        </div>

        {/* Footer decoration for content pages */}
        {!isCover && (
          <div className="mt-2 md:mt-4 pt-2 border-t border-slate-800/50 flex justify-between items-center opacity-30 shrink-0">
            <span className="text-[8px] md:text-[10px] text-slate-400 uppercase tracking-widest">XFUSE Confidential</span>
            <div className="h-1 w-1 rounded-full bg-xfuse-accent"></div>
          </div>
        )}
      </div>
    </div>
  );
});

Page.displayName = 'Page';
