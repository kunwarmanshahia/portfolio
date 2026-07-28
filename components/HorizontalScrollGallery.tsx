import React, { useEffect, useRef, useState } from 'react';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

export type ScrollGalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  items: ScrollGalleryItem[];
};

const DRAG_THRESHOLD = 8;

/**
 * Horizontal side-by-side gallery:
 * - drag / touch to scroll
 * - mouse toward left/right edges auto-scrolls
 * - hover enlarges; click opens closable lightbox
 */
const HorizontalScrollGallery: React.FC<Props> = ({ items }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const dragRef = useRef<{
    active: boolean;
    startX: number;
    scrollLeft: number;
    moved: boolean;
    itemId: string | null;
  }>({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
    itemId: null,
  });
  const [dragging, setDragging] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<ScrollGalleryItem | null>(null);

  useEffect(() => {
    const tick = () => {
      const el = scrollerRef.current;
      if (el && !dragRef.current.active && speedRef.current !== 0) {
        el.scrollLeft += speedRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  const itemFromTarget = (target: EventTarget | null) => {
    if (!(target instanceof Element)) return null;
    const node = target.closest('[data-gallery-id]');
    const id = node?.getAttribute('data-gallery-id');
    if (!id) return null;
    return items.find((item) => item.id === id) ?? null;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    const item = itemFromTarget(e.target);
    dragRef.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
      itemId: item?.id ?? null,
    };
    setDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el || !dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    if (Math.abs(dx) > DRAG_THRESHOLD) dragRef.current.moved = true;
    el.scrollLeft = dragRef.current.scrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const { moved, itemId } = dragRef.current;
    dragRef.current.active = false;
    setDragging(false);
    try {
      scrollerRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }

    // Pointer capture steals click from children — open lightbox on clean tap instead
    if (!moved && itemId) {
      const item = items.find((i) => i.id === itemId);
      if (item) setLightbox(item);
    }
    dragRef.current.itemId = null;
  };

  const onScrollerMouseMove = (e: React.MouseEvent) => {
    if (dragRef.current.active) {
      speedRef.current = 0;
      return;
    }
    const el = scrollerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const edge = 0.25;
    if (ratio < edge) {
      speedRef.current = -((edge - ratio) / edge) * 16;
    } else if (ratio > 1 - edge) {
      speedRef.current = ((ratio - (1 - edge)) / edge) * 16;
    } else {
      speedRef.current = 0;
    }
  };

  return (
    <>
      <div
        ref={scrollerRef}
        className={`w-full overflow-x-auto overflow-y-visible pb-10 pt-6 select-none ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseMove={onScrollerMouseMove}
        onMouseLeave={() => {
          speedRef.current = 0;
        }}
      >
        <ul className="flex items-end gap-4 md:gap-6 px-1 w-max">
          {items.map((item) => {
            const enlarged = hoveredId === item.id && !dragging;
            return (
              <li
                key={item.id}
                data-gallery-id={item.id}
                className="relative shrink-0 transition-transform duration-300 ease-out origin-bottom cursor-pointer"
                style={{
                  transform: enlarged ? 'scale(1.12)' : 'scale(1)',
                  zIndex: enlarged ? 20 : 1,
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                  className="block h-[min(55vh,420px)] w-auto max-w-[min(80vw,520px)] object-contain pointer-events-none"
                />
                {item.caption && (
                  <p
                    className="mt-2 uppercase text-center text-black/70 pointer-events-none"
                    style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
                  >
                    {item.caption}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: 'rgba(0,0,0,0.72)' }}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 uppercase text-white/90 hover:text-white transition-colors z-10"
            style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            Close
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-[min(100%,920px)] max-h-[85vh] w-auto h-auto object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default HorizontalScrollGallery;
