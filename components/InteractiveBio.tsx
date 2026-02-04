
import React, { useMemo } from 'react';

const BIO_TEXT = "I grow through design and thinking, shaping ideas into experiences that feel real. My approach is built on curiosity, craft, and a constant desire to learn. I believe stories matter, that details give work meaning, and that design should connect to people, not just trends.";

const InteractiveBio: React.FC = () => {
  // Split text into words to preserve word integrity during wrapping
  const words = useMemo(() => BIO_TEXT.split(' '), []);

  return (
    <section className="w-full">
      <div className="text-4xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tighter text-left font-sans select-none flex flex-wrap">
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.2em] mb-[0.1em]">
            {word.split('').map((char, charIdx) => (
              <span
                key={charIdx}
                className="inline-block transition-all duration-300 ease-out text-brand-dark/20 dark:text-brand-light/20 hover:text-brand-dark dark:hover:text-brand-light hover:scale-110 cursor-default"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
};

export default InteractiveBio;
