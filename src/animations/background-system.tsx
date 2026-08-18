'use client';

import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';

function OrbitalGlow() {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.4}>
      <mesh>
        <icosahedronGeometry args={[1.4, 2]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#2563eb"
          emissiveIntensity={1.4}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

export function BackgroundSystem() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#05070F']} />
        <ambientLight intensity={0.8} />
        <pointLight position={[3, 2, 4]} intensity={18} color="#60a5fa" />
        <pointLight position={[-3, -2, 2]} intensity={12} color="#38bdf8" />
        <OrbitalGlow />
        <Stars radius={50} depth={30} count={3000} factor={4} saturation={0} fade speed={0.5} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
      </Canvas>
    </div>
  );
}
