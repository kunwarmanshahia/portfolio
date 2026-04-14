import React, { useEffect, useRef, useState } from 'react';

const kunwarFace = new URL('../KunwarCartoon/KunwarFace.svg', import.meta.url).href;
const leftEye = new URL('../KunwarCartoon/LeftEye-02.svg', import.meta.url).href;
const rightEye = new URL('../KunwarCartoon/RightEye-02.svg', import.meta.url).href;

interface Props {
  className?: string;
} // props means properties. this is needed because the component needs to know the className of the container.

const EYE_RANGE = 3;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value)); // this is a helper function to keep the value between a minimum and maximum.
}

function KunwarCartoon({ className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyeFrameRef = useRef<number>(0);
  const blinkRafRef = useRef<number | null>(null);
  const blinkTimeoutRef = useRef<number | null>(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    function trackMouse(event: MouseEvent) {
      if (eyeFrameRef.current) {
        cancelAnimationFrame(eyeFrameRef.current);
      }

      eyeFrameRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const bounds = container.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;

        const distanceX = event.clientX - centerX;
        const distanceY = event.clientY - centerY;
        const maxDistance = Math.max(bounds.width, bounds.height) / 2;
        const ratioX = clamp(distanceX / maxDistance, -1, 1);
        const ratioY = clamp(distanceY / maxDistance, -1, 1);

        setEyeOffset({
          x: ratioX * EYE_RANGE,
          y: ratioY * EYE_RANGE,
        });

        setTilt({
          x: ratioY * -5,
          y: ratioX * 5,
        });
      });
    }

    window.addEventListener('mousemove', trackMouse, { passive: true });
    return () => {
      window.removeEventListener('mousemove', trackMouse);
      if (eyeFrameRef.current) {
        cancelAnimationFrame(eyeFrameRef.current);
      }
      if (blinkRafRef.current) {
        cancelAnimationFrame(blinkRafRef.current);
      }
      if (blinkTimeoutRef.current) {
        window.clearTimeout(blinkTimeoutRef.current);
      }
    };
  }, []);

  const triggerBlink = () => {
    setIsBlinking(false);
    if (blinkRafRef.current) {
      cancelAnimationFrame(blinkRafRef.current);
    }
    blinkRafRef.current = requestAnimationFrame(() => setIsBlinking(true));
    if (blinkTimeoutRef.current) {
      window.clearTimeout(blinkTimeoutRef.current);
    }
    blinkTimeoutRef.current = window.setTimeout(() => setIsBlinking(false), 180);
  };

  return (
    <>
      {/* without this containerRef, the code won't know where the cartoon is positioned on the page which would cause the eyes to not know which direction to look */}
      <div
        ref={containerRef}
        className={`relative ${className}`}
        onClick={triggerBlink}
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 70ms ease-out',
          cursor: 'pointer',
        }}
      >
        <img
          src={leftEye}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-auto pointer-events-none select-none"
          draggable={false}
          style={{
            transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px) scaleY(${isBlinking ? 0.1 : 1})`,
            transformOrigin: 'center',
            transition: 'transform 70ms ease-out',
          }}
        />
        <img
          src={rightEye}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-auto pointer-events-none select-none"
          draggable={false}
          style={{
            transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px) scaleY(${isBlinking ? 0.1 : 1})`,
            transformOrigin: 'center',
            transition: 'transform 70ms ease-out',
          }}
        />
        <img src={kunwarFace} alt="Kunwar cartoon face" className="relative z-10 w-full h-auto block" draggable={false} />
      </div>
    </>
  );
}

export default KunwarCartoon;
