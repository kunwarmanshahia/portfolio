
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Artifact = ({ position, color, speed, distort, radius }: any) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(t * speed) * 0.002;
    // Follow mouse slightly
    const targetX = (state.mouse.x * state.viewport.width) / 2;
    const targetY = (state.mouse.y * state.viewport.height) / 2;
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.01;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={2} floatIntensity={2}>
      <Sphere
        ref={meshRef}
        args={[radius, 64, 64]}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        scale={hovered ? 1.2 : 1}
      >
        <MeshDistortMaterial
          color={clicked ? '#ef233c' : color}
          speed={speed * 3}
          distort={hovered ? distort * 2 : distort}
          radius={1}
        />
      </Sphere>
    </Float>
  );
};

const SceneContent = () => {
  const { viewport } = useThree();
  
  const artifacts = useMemo(() => [
    { position: [-2, 1, 0], color: '#2a2a2a', speed: 1.2, distort: 0.4, radius: 0.8 },
    { position: [2, -1, -1], color: '#8d99ae', speed: 0.8, distort: 0.3, radius: 0.6 },
    { position: [0, 0, -2], color: '#ef233c', speed: 1.5, distort: 0.5, radius: 0.4 },
    { position: [-3, -1.5, -1], color: '#2a2a2a', speed: 1, distort: 0.2, radius: 0.5 },
    { position: [3, 1.5, -2], color: '#8d99ae', speed: 0.7, distort: 0.6, radius: 0.7 },
  ], []);

  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
      
      {artifacts.map((props, i) => (
        <Artifact key={i} {...props} />
      ))}
    </>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden bg-brand-light/30 dark:bg-brand-dark/30 rounded-3xl group">
      <div className="absolute inset-0 pointer-events-none z-10 p-8 md:p-12 flex flex-col justify-end">
        <div className="max-w-xl space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-sans uppercase mix-blend-difference text-white">
            Interactive Space
          </h2>
          <p className="text-lg md:text-xl font-sans opacity-80 mix-blend-difference text-white">
            Touch to distort, move to explore. A digital sandbox of fluid geometry representing the intersection of logic and art.
          </p>
        </div>
      </div>
      
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <SceneContent />
      </Canvas>

      <div className="absolute top-8 right-8 z-10 font-mono text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
        [ Drag / Click / Hover ]
      </div>
    </div>
  );
};

export default ThreeScene;