import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 1000;
  
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    
    const isGreen = Math.random() > 0.5;
    colors[i * 3] = isGreen ? 0.3 : 0.2;
    colors[i * 3 + 1] = isGreen ? 0.8 : 0.6;
    colors[i * 3 + 2] = isGreen ? 0.4 : 0.8;
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const RotatingCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });
  
  return (
    <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial
        color="#4ade80"
        wireframe
        transparent
        opacity={0.6}
        emissive="#22c55e"
        emissiveIntensity={0.5}
      />
    </Box>
  );
};

const GlowingSphere = ({ position }: { position: [number, number, number] }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      sphereRef.current.scale.set(scale, scale, scale);
    }
  });
  
  return (
    <Sphere ref={sphereRef} position={position} args={[0.3, 16, 16]}>
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.7}
        emissive="#60a5fa"
        emissiveIntensity={0.8}
      />
    </Sphere>
  );
};

const DigitalForest = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4ade80" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <FloatingParticles />
        
        <RotatingCube position={[-2, 0, 0]} />
        <RotatingCube position={[2, 1, -1]} />
        <RotatingCube position={[0, -1, -2]} />
        
        <GlowingSphere position={[-3, 2, -2]} />
        <GlowingSphere position={[3, -1, -1]} />
        <GlowingSphere position={[0, 2, 1]} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default DigitalForest;
