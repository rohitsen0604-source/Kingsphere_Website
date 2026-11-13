'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Realistic geographic hubs across major global trade corridors
// [latitude, longitude, name]
const TRADE_HUBS: [number, number, string][] = [
  [19.26, 76.77, 'India - Parbhani/Maharashtra'],
  [18.92, 72.83, 'India - Mumbai'],
  [28.61, 77.20, 'India - New Delhi'],
  [25.20, 55.27, 'UAE - Dubai'],
  [1.35, 103.81, 'Singapore'],
  [51.50, -0.12, 'UK - London'],
  [50.11, 8.68, 'Germany - Frankfurt'],
  [31.23, 121.47, 'China - Shanghai'],
  [35.67, 139.65, 'Japan - Tokyo'],
  [40.71, -74.00, 'USA - New York'],
  [-33.86, 151.20, 'Australia - Sydney'],
  [-26.20, 28.04, 'South Africa - Johannesburg'],
  [22.31, 114.16, 'Hong Kong'],
  [24.71, 46.67, 'Saudi Arabia - Riyadh'],
  [48.85, 2.35, 'France - Paris'],
];

// Convert Lat/Lng to Vector3 on sphere of given radius
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Generate dense continental cluster dots for a natural landmass feel
function generateContinentPoints(radius: number) {
  const points: THREE.Vector3[] = [];

  // Seed continent centers
  const continents: [number, number, number][] = [
    [20, 78, 18],    // Indian Subcontinent
    [25, 45, 14],    // Middle East
    [50, 15, 16],    // Europe
    [35, 105, 22],   // East Asia
    [5, 115, 14],    // SE Asia
    [40, -100, 20],  // North America
    [-15, -60, 16],  // South America
    [5, 25, 18],     // Africa
    [-25, 135, 14],  // Australia
  ];

  continents.forEach(([cLat, cLng, count]) => {
    for (let i = 0; i < count; i++) {
      const latOffset = (Math.random() - 0.5) * 22;
      const lngOffset = (Math.random() - 0.5) * 35;
      points.push(latLngToVector3(cLat + latOffset, cLng + lngOffset, radius));
    }
  });

  return points;
}

// Generate luxury gold arcs connecting key trade hubs
function generateTradeArcs(radius: number) {
  const arcs: THREE.QuadraticBezierCurve3[] = [];
  const indiaHub = latLngToVector3(19.26, 76.77, radius); // KINGSPHERE Core

  // Routes radiating from India to key global centers
  const targetCoordinates: [number, number][] = [
    [25.20, 55.27],   // Dubai
    [1.35, 103.81],   // Singapore
    [51.50, -0.12],   // London
    [50.11, 8.68],    // Frankfurt
    [31.23, 121.47],  // Shanghai
    [35.67, 139.65],  // Tokyo
    [24.71, 46.67],   // Riyadh
    [-26.20, 28.04],  // Johannesburg
    [40.71, -74.00],  // New York
  ];

  targetCoordinates.forEach(([lat, lng]) => {
    const end = latLngToVector3(lat, lng, radius);
    const mid = new THREE.Vector3().addVectors(indiaHub, end).multiplyScalar(0.5);
    const distance = indiaHub.distanceTo(end);
    mid.normalize().multiplyScalar(radius + Math.min(distance * 0.28, 0.55));
    arcs.push(new THREE.QuadraticBezierCurve3(indiaHub, mid, end));
  });

  return arcs;
}

function MetallicGlobeMesh({ radius = 2.4 }: { radius?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  const hubVectors = useMemo(() => TRADE_HUBS.map(([lat, lng]) => latLngToVector3(lat, lng, radius)), [radius]);
  const continentDots = useMemo(() => generateContinentPoints(radius), [radius]);
  const tradeArcs = useMemo(() => generateTradeArcs(radius), [radius]);

  const arcLines = useMemo(() => {
    return tradeArcs.map((curve) => {
      const points = curve.getPoints(32);
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: '#E8D29A',
        transparent: true,
        opacity: 0.55,
      });
      return new THREE.Line(geom, mat);
    });
  }, [tradeArcs]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.04;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Deep Metallic Core Sphere with refined dark reflection */}
      <Sphere args={[radius, 64, 64]}>
        <meshStandardMaterial
          color="#070B0E"
          roughness={0.45}
          metalness={0.65}
        />
      </Sphere>

      {/* 2. Precision Architectural Grid */}
      <Sphere args={[radius + 0.005, 36, 36]}>
        <meshBasicMaterial
          color="#C9A34F"
          wireframe={true}
          transparent={true}
          opacity={0.08}
        />
      </Sphere>

      {/* 3. Soft Atmospheric Rim Shell */}
      <Sphere args={[radius + 0.12, 48, 48]}>
        <meshBasicMaterial
          color="#E8D29A"
          transparent={true}
          opacity={0.04}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* 4. Continent Golden Point Cloud */}
      {continentDots.map((pt, i) => (
        <mesh key={`c-pt-${i}`} position={pt}>
          <sphereGeometry args={[0.016, 6, 6]} />
          <meshBasicMaterial color="#C9A34F" transparent opacity={0.4} />
        </mesh>
      ))}

      {/* 5. Major Global Trade Hubs (Pulsing Gold) */}
      {hubVectors.map((pt, i) => (
        <group key={`hub-${i}`} position={pt}>
          <mesh>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color="#E8D29A" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.085, 12, 12]} />
            <meshBasicMaterial color="#C9A34F" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}

      {/* 6. Precision Trade Route Bezier Arcs */}
      {arcLines.map((lineObj, idx) => (
        <primitive object={lineObj} key={`arc-${idx}`} />
      ))}

      {/* 7. Dual Architectural Orbital Gyro Rings */}
      <mesh ref={ringRef} rotation={[Math.PI / 3.2, 0, 0]}>
        <ringGeometry args={[radius * 1.34, radius * 1.35, 96]} />
        <meshBasicMaterial
          color="#C9A34F"
          side={THREE.DoubleSide}
          transparent
          opacity={0.35}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, 0, Math.PI / 6]}>
        <ringGeometry args={[radius * 1.48, radius * 1.488, 96]} />
        <meshBasicMaterial
          color="#E8D29A"
          side={THREE.DoubleSide}
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

export default function GlobeCanvas() {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[500px] relative select-none">
      <Canvas
        camera={{ position: [0, 0.3, 5.7], fov: 44 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.7} />
        {/* Warm key directional light */}
        <directionalLight position={[4, 5, 4]} intensity={2.0} color="#E8D29A" />
        {/* Metallic fill light */}
        <directionalLight position={[-4, -3, -3]} intensity={0.8} color="#C9A34F" />
        {/* Subtle center point light */}
        <pointLight position={[0, 0, 3.8]} intensity={1.0} color="#E8D29A" />

        <MetallicGlobeMesh />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.4}
        />
      </Canvas>
    </div>
  );
}
