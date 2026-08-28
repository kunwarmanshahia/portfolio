import React from 'react';

const kunwarStaticFace = new URL('../KunwarCartoon/KunwarStaticFace.svg', import.meta.url).href;

interface Props {
  className?: string;
}

function KunwarCartoon({ className = '' }: Props) {
  return (
    <img
      src={kunwarStaticFace}
      alt="Kunwar cartoon face"
      className={`w-full h-auto block ${className}`}
      style={{
        maxHeight: 'calc(100vh - 200px)',
        aspectRatio: '967.2 / 680.74',
        objectFit: 'contain',
      }}
      draggable={false}
    />
  );
}

export default KunwarCartoon;
