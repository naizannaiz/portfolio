import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Inner rotating geometry scene
function LogoScene({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  // Build particle ring positions
  const particleCount = 28;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2;
    const radius = 0.72;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = Math.sin(angle) * radius;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const speed = hovered ? 2.2 : 0.7;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * speed * 0.5;
      groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.25;
    }
    if (torusRef.current) {
      torusRef.current.rotation.z = t * speed * 0.8;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = t * speed;
      innerRef.current.rotation.y = t * speed * 0.7;
      // Pulse scale
      const pulse = 1 + Math.sin(t * 2.5) * 0.07;
      innerRef.current.scale.setScalar(pulse);
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z = -t * speed * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer torus ring */}
      <mesh ref={torusRef}>
        <torusGeometry args={[0.7, 0.06, 12, 60]} />
        <meshStandardMaterial
          color={hovered ? '#60a5fa' : '#3b82f6'}
          emissive={hovered ? '#3b82f6' : '#1d4ed8'}
          emissiveIntensity={hovered ? 1.4 : 0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Inner octahedron */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial
          color={hovered ? '#a78bfa' : '#7c3aed'}
          emissive={hovered ? '#7c3aed' : '#4c1d95'}
          emissiveIntensity={hovered ? 1.6 : 1.0}
          roughness={0.05}
          metalness={1.0}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color={hovered ? '#c4b5fd' : '#8b5cf6'}
          emissive="#7c3aed"
          emissiveIntensity={0.5}
          wireframe
          opacity={0.35}
          transparent
        />
      </mesh>

      {/* Particle ring */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={hovered ? '#93c5fd' : '#60a5fa'}
          size={0.055}
          sizeAttenuation
          transparent
          opacity={hovered ? 1 : 0.7}
        />
      </points>

      {/* Ambient + directional lights inside scene */}
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 2, 2]} intensity={2.5} color="#60a5fa" />
      <pointLight position={[-2, -1, -1]} intensity={1.5} color="#a78bfa" />
    </group>
  );
}

export default function MNLogo3D() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ width: 52, height: 52, cursor: 'pointer', position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title="MN"
    >
      <Canvas
        camera={{ position: [0, 0, 2.2], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <LogoScene hovered={hovered} />
      </Canvas>

      {/* Glow ring behind canvas */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          boxShadow: hovered
            ? '0 0 18px 6px rgba(99,102,241,0.55), 0 0 6px 2px rgba(96,165,250,0.4)'
            : '0 0 10px 2px rgba(99,102,241,0.25)',
          transition: 'box-shadow 0.3s ease',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
