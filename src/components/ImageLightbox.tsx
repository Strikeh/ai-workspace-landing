'use client';

import { useEffect, useState } from 'react';

export default function ImageLightbox() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Add click handlers to all images in the blog content
    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' && target.closest('.prose')) {
        e.preventDefault();
        const img = target as HTMLImageElement;
        // Use currentSrc for Next.js optimized images, fallback to src
        const imageSrc = img.currentSrc || img.src;
        if (imageSrc) {
          console.log('Opening image:', imageSrc);
          setSelectedImage(imageSrc);
        }
      }
    };

    document.addEventListener('click', handleImageClick);
    return () => document.removeEventListener('click', handleImageClick);
  }, []);

  useEffect(() => {
    // Disable body scroll when lightbox is open
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  useEffect(() => {
    // Close on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out animate-in fade-in duration-200"
      onClick={() => setSelectedImage(null)}
    >
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
        aria-label="Close"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="relative max-h-[90vh] max-w-[90vw] animate-in zoom-in-95 duration-200">
        <img
          src={selectedImage}
          alt="Enlarged view"
          className="h-auto w-auto max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
        Click anywhere or press ESC to close
      </div>
    </div>
  );
}
