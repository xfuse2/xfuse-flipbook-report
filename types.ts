export interface PageContent {
  id: string;
  title?: string;
  subtitle?: string;
  content?: string | React.ReactNode;
  type: 'cover' | 'content' | 'back-cover';
  pageNumber?: number;
}

// Minimal type definition for the global St object from the CDN
export interface PageFlipOptions {
  width: number;
  height: number;
  size?: 'fixed' | 'stretch';
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  drawShadow?: boolean;
  flippingTime?: number;
  usePortrait?: boolean;
  startZIndex?: number;
  startPage?: number;
  autoSize?: boolean;
  maxShadowOpacity?: number;
  showCover?: boolean;
  mobileScrollSupport?: boolean;
}

export interface PageFlipInstance {
  loadFromHTML: (items: NodeListOf<Element> | Element[]) => void;
  flipNext: (corner?: string) => void;
  flipPrev: (corner?: string) => void;
  turnToPage: (page: number) => void;
  destroy: () => void;
  updateFromHtml: (items: NodeListOf<Element> | Element[]) => void;
  on: (event: string, callback: (e: any) => void) => void;
  off: (event: string, callback: (e: any) => void) => void;
  getCurrentPageIndex: () => number;
  getPageCount: () => number;
}

declare global {
  interface Window {
    St: {
      PageFlip: new (element: HTMLElement, settings: PageFlipOptions) => PageFlipInstance;
    };
  }
}
