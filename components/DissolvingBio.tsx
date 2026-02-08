
import React, { useEffect, useState, useMemo } from 'react';

const FULL_BIO = "I grow through design and thinking, shaping ideas into experiences that feel real. My approach is built on curiosity, craft, and a constant desire to learn. I believe stories matter, that details give work meaning, and that design should connect to people, not just trends.";
const TARGET_PHRASE = "who cares";

const DissolvingBio: React.FC = () => {
  const [isDissolved, setIsDissolved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDissolved(true);
    }, 5000); // 5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  // Logic to map "who cares" letters to the bio
  const charData = useMemo(() => {
    let targetIdx = 0;
    const targetChars = TARGET_PHRASE.toLowerCase().split('');
    
    return FULL_BIO.split('').map((char, index) => {
      const isSpace = char === ' ';
      let stays = false;

      // Logic to find the subsequence "who cares"
      if (!isSpace && targetIdx < targetChars.length) {
        if (char.toLowerCase() === targetChars[targetIdx]) {
          stays = true;
          targetIdx++;
        }
      } else if (isSpace && targetIdx < targetChars.length && targetChars[targetIdx] === ' ') {
        stays = true;
        targetIdx++;
      }

      // Randomize animation properties for the leavers
      const dx = (Math.random() - 0.5) * 100;
      const dxFinal = (Math.random() - 0.5) * 500;
      const dr = (Math.random() - 0.5) * 45;
      const drFinal = (Math.random() - 0.5) * 720;
      const duration = 1.5 + Math.random() * 2.5;
      const delay = Math.random() * 0.8;

      return {
        char,
        stays,
        style: {
          '--dx': `${dx}px`,
          '--dx-final': `${dxFinal}px`,
          '--dr': `${dr}deg`,
          '--dr-final': `${drFinal}deg`,
          '--duration': `${duration}s`,
          '--delay': `${delay}s`,
        } as React.CSSProperties,
      };
    });
  }, []);

  return (
    <section className="w-full">
      <div className="text-4xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tighter text-left text-brand-dark dark:text-brand-light font-sans">
        {charData.map((item, i) => (
          <span
            key={i}
            style={!item.stays && isDissolved ? item.style : {}}
            className={`${
              isDissolved && !item.stays ? 'letter-falling' : 'letter-stay'
            } ${isDissolved && item.stays ? 'opacity-100' : ''}`}
          >
            {item.char === ' ' ? '\u00A0' : item.char}
          </span>
        ))}
      </div>
    </section>
  );
};

export default DissolvingBio;
