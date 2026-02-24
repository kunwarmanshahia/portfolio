import React, { useState, useEffect } from 'react';
import { Theme } from '../types';

interface CursorProps {
  theme: Theme;
}

const CLICKABLE_SELECTOR = 'a, button, [role="button"], [data-clickable]';

const Cursor: React.FC<CursorProps> = ({ theme }) => {
  const [cursor, setCursor] = useState<{ x: number; y: number; overClickable: boolean } | null>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const target = e.target as Element;
      const overClickable = target.closest(CLICKABLE_SELECTOR) !== null;
      setCursor({ x: e.clientX, y: e.clientY, overClickable });
    };
    const handlePointerLeave = () => {
      setCursor(null);
    };

    document.documentElement.classList.add('custom-cursor');
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      document.documentElement.classList.remove('custom-cursor');
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  if (cursor === null) return null;

  const fillColor = '#ff8811';

  return (
    <div
      className="pointer-events-none fixed z-[9999] flex items-center justify-center"
      style={{
        left: cursor.x,
        top: cursor.y,
        transform: 'translate(-50%, -50%)',
        color: fillColor,
        width: cursor.overClickable ? 36 : 14,
        height: cursor.overClickable ? 36 : 14,
      }}
      aria-hidden
    >
      {cursor.overClickable ? (
        <div className="relative h-full w-full">
          <div
            className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2"
            style={{ backgroundColor: fillColor }}
          />
          <div
            className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2"
            style={{ backgroundColor: fillColor }}
          />
        </div>
      ) : (
        <div
          className="h-full w-full rounded-full"
          style={{ backgroundColor: fillColor }}
        />
      )}
    </div>
  );
};

export default Cursor;
