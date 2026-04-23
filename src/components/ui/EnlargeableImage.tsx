import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnlargeableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  zoomOverlay?: React.ReactNode;
  galleryImages?: string[];
  galleryIndex?: number;
}

export function EnlargeableImage({ 
  src, 
  alt, 
  className, 
  containerClassName, 
  zoomOverlay, 
  galleryImages,
  galleryIndex = 0,
  ...props 
}: EnlargeableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIdx, setActiveIdx] = useState(galleryIndex);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isExpanded) {
      setActiveIdx(galleryIndex);
    }
  }, [galleryIndex, isExpanded]);

  const hasGallery = galleryImages && galleryImages.length > 1;
  const currentSrc = hasGallery && galleryImages ? galleryImages[activeIdx] : src;

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (hasGallery && galleryImages) {
      setActiveIdx((prev) => (prev + 1) % galleryImages.length);
    }
  }, [hasGallery, galleryImages]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (hasGallery && galleryImages) {
      setActiveIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [hasGallery, galleryImages]);

  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsExpanded(false);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded, handleNext, handlePrev]);

  return (
    <>
      <div 
        className={cn("relative group cursor-pointer overflow-hidden block", containerClassName)}
        onClick={() => setIsExpanded(true)}
        role="button"
        tabIndex={0}
        aria-label="Zvětšit fotku"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsExpanded(true);
          }
        }}
      >
        <img
          src={src}
          alt={alt}
          className={cn("w-full h-full object-cover transition-transform duration-500", className)}
          {...props}
        />
        {zoomOverlay}
      </div>

      {isExpanded && mounted && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center group/lightbox">
            <img
              src={currentSrc}
              alt={`${alt} (zvětšené)`}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl transition-opacity duration-300"
              onClick={(e) => e.stopPropagation()}
            />

            {hasGallery && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all opacity-0 group-hover/lightbox:opacity-100 shadow-lg border border-white/10"
                  aria-label="Předchozí obrázek"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all opacity-0 group-hover/lightbox:opacity-100 shadow-lg border border-white/10"
                  aria-label="Další obrázek"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 md:-right-12 md:-top-12 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors shadow-lg border border-white/10"
              aria-label="Zavřít"
            >
              <X size={24} />
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
