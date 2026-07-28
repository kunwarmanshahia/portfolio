import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import KunwarCartoon from '../components/CartoonFace';
import SiteHeader from '../components/SiteHeader';
import { homeMouseImages } from '../lib/projects';

/** Mouse travel (px) before drawing the next image from the deck */
const ZONE_PX = 50;

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const isDesktopScrub = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches;

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isIdle, setIsIdle] = useState(true);
  const idleTimerRef = useRef<number | null>(null);
  const travelRef = useRef(0);
  const deckRef = useRef<number[]>([]);

  const refillDeck = (count: number, exclude?: number) => {
    let next = shuffle([...Array(count).keys()]);
    if (exclude !== undefined && next.length > 1 && next[0] === exclude) {
      const swap = 1 + Math.floor(Math.random() * (next.length - 1));
      [next[0], next[swap]] = [next[swap], next[0]];
    }
    deckRef.current = next;
  };

  const drawNext = (count: number, prev: number) => {
    if (count <= 1) return 0;
    if (deckRef.current.length === 0) refillDeck(count, prev);
    let next = deckRef.current.shift()!;
    if (next === prev && deckRef.current.length > 0) {
      deckRef.current.push(next);
      next = deckRef.current.shift()!;
    } else if (next === prev) {
      refillDeck(count, prev);
      next = deckRef.current.shift()!;
    }
    return next;
  };

  useEffect(() => {
    homeMouseImages.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

  useEffect(() => {
    const count = homeMouseImages.length;
    if (count === 0) return;

    refillDeck(count);
    setActiveIndex(deckRef.current.shift() ?? 0);

    const bumpIdleTimer = () => {
      setIsIdle(false);
      if (idleTimerRef.current !== null) {
        window.clearTimeout(idleTimerRef.current);
      }
      idleTimerRef.current = window.setTimeout(() => {
        setIsIdle(true);
      }, 2000);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDesktopScrub()) return;
      travelRef.current += Math.abs(e.movementX) + Math.abs(e.movementY);
      bumpIdleTimer();
      if (travelRef.current < ZONE_PX) return;
      travelRef.current = 0;
      setActiveIndex((prev) => drawNext(count, prev));
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (idleTimerRef.current !== null) {
        window.clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  const active = homeMouseImages[Math.min(activeIndex, Math.max(0, homeMouseImages.length - 1))];

  return (
    <div className="min-h-screen text-black flex flex-col" style={{ background: '#f4f4f2' }}>
      <SiteHeader />

      <main
        className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8"
        style={{ margin: 'clamp(24px, 6vw, 60px)' }}
      >
        {isIdle ? (
          <div
            className="w-full max-w-4xl mx-auto flex items-center justify-center"
            aria-label="Kunwar cartoon"
          >
            <KunwarCartoon />
          </div>
        ) : (
          active && (
            <Link
              to={active.link}
              className="group flex flex-col items-center max-w-full"
              aria-label={`Open ${active.title}`}
            >
              <img
                key={active.id}
                src={active.image}
                alt={active.title}
                className="max-w-full h-auto object-contain"
                style={{ maxHeight: 'calc(100vh - 200px)' }}
                draggable={false}
              />
            </Link>
          )
        )}
      </main>
    </div>
  );
};

export default Home;
