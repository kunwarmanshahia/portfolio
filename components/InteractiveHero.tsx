
import React, { useEffect, useRef, useState } from 'react';

const BIO_TEXT = "Kunwar Manshahia is a multidisciplinary designer specializing in building cohesive digital experiences. His approach blends rigorous systems thinking with a sharp aesthetic sensibility. Move your cursor to interact with the vision.";

interface WordProps {
  text: string;
  mousePos: { x: number; y: number };
}

const InteractiveWord: React.FC<WordProps> = ({ text, mousePos }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const wordCenterX = rect.left + rect.width / 2;
    const wordCenterY = rect.top + rect.height / 2;

    const dx = mousePos.x - wordCenterX;
    const dy = mousePos.y - wordCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Interaction radius
    const radius = 150;

    if (distance < radius) {
      const force = (radius - distance) / radius;
      // Push away from mouse
      const pushX = (dx / distance) * -40 * force;
      const pushY = (dy / distance) * -40 * force;
      setOffset({ x: pushX, y: pushY });
      setIsHovered(true);
    } else {
      setOffset({ x: 0, y: 0 });
      setIsHovered(false);
    }
  }, [mousePos]);

  return (
    <span
      ref={ref}
      className={`inline-block mr-3 transition-all duration-500 ease-out select-none cursor-default
        ${isHovered ? 'text-brand-dark dark:text-brand-light font-bold scale-110 italic' : 'text-brand-dark/80 dark:text-brand-light/80 font-normal scale-100'}
      `}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      {text}
    </span>
  );
};

const InteractiveHero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);
  const words = BIO_TEXT.split(' ');

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  const handleClick = () => {
    // Optional: Add a pulse effect or scatter
    setMousePos(prev => ({ x: prev.x + (Math.random() - 0.5) * 100, y: prev.y + (Math.random() - 0.5) * 100 }));
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="w-full min-h-[40vh] flex items-center py-12"
    >
      <div className="text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.2] tracking-tighter text-left max-w-screen-xl flex flex-wrap content-start">
        {words.map((word, i) => (
          <InteractiveWord key={`${word}-${i}`} text={word} mousePos={mousePos} />
        ))}
      </div>
    </section>
  );
};

export default InteractiveHero;
