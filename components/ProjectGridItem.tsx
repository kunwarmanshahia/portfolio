import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const switzer: React.CSSProperties = {
  fontFamily: "'Switzer', sans-serif",
};

/** Matches Typography 2-col cell width inside max-w-6xl + gap-6 */
export const TYPOGRAPHY_CELL =
  'w-full sm:w-[calc((100%-1.5rem)/2)] max-w-full';

type GridItemProps = {
  title: string;
  year: string;
  image: string;
  /** When set, navigates to project page (Select Work items) */
  link?: string;
  /** Open lightbox instead of navigating */
  onOpen?: () => void;
  /** Hide title/year under the image */
  hideMeta?: boolean;
  /** Center a lone portrait in a 2-col row at Typography cell width */
  centerInRow?: boolean;
  /** Keep 1 column even if the image is landscape */
  lockColumn?: boolean;
  /**
   * Landscape spans the full 2-col row (enlarged). Default true.
   */
  typographyLandscape?: boolean;
  as?: 'li' | 'div';
  className?: string;
};

const ProjectGridItem: React.FC<GridItemProps> = ({
  title,
  year,
  image,
  link,
  onOpen,
  hideMeta = false,
  centerInRow = false,
  lockColumn = false,
  typographyLandscape = true,
  as = 'li',
  className,
}) => {
  const [landscape, setLandscape] = useState(false);
  const Tag = as;

  const useFullLandscape = landscape && !lockColumn && typographyLandscape;
  const centerPortrait = centerInRow && !useFullLandscape;

  const colClass = useFullLandscape
    ? 'col-span-1 sm:col-span-2'
    : centerPortrait
      ? 'col-span-1 sm:col-span-2 flex justify-center'
      : 'col-span-1';

  const imgClass = useFullLandscape
    ? 'w-full h-auto block mx-auto transition-opacity group-hover:opacity-90'
    : centerPortrait
      ? `h-auto block mx-auto transition-opacity group-hover:opacity-90 ${TYPOGRAPHY_CELL}`
      : 'w-full h-auto block mx-auto transition-opacity group-hover:opacity-90';

  const inner = (
    <>
      <img
        src={image}
        alt={title}
        className={imgClass}
        onLoad={(e) => {
          if (lockColumn) return;
          const img = e.currentTarget;
          setLandscape(img.naturalWidth > img.naturalHeight);
        }}
      />
      {!hideMeta && (
        <>
          <p
            className="mt-3 uppercase text-black transition-colors group-hover:text-[#be1e2d]"
            style={{ ...switzer, fontWeight: 500, fontSize: '16px' }}
          >
            {title}
          </p>
          <p
            className="mt-1 text-black transition-colors group-hover:text-[#be1e2d]"
            style={{ ...switzer, fontWeight: 500, fontSize: '14px' }}
          >
            {year}
          </p>
        </>
      )}
    </>
  );

  const shellClass = centerPortrait
    ? 'group block text-center w-full flex flex-col items-center'
    : 'group block text-center w-full';

  return (
    <Tag className={className ?? colClass}>
      {link ? (
        <Link to={link} className={shellClass}>
          {inner}
        </Link>
      ) : (
        <button
          type="button"
          className={`${shellClass} cursor-pointer bg-transparent border-0 p-0`}
          onClick={onOpen}
          aria-label={`View ${title}`}
        >
          {inner}
        </button>
      )}
    </Tag>
  );
};

/** Shared closable image lightbox for See All */
export const ImageLightbox: React.FC<{
  src: string;
  alt: string;
  onClose: () => void;
}> = ({ src, alt, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ background: 'rgba(0,0,0,0.72)' }}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 uppercase text-white/90 hover:text-white transition-colors z-10"
        style={{ ...switzer, fontWeight: 500, fontSize: '12px' }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        Close
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-[min(100%,920px)] max-h-[85vh] w-auto h-auto object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ProjectGridItem;
