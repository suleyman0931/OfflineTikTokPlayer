"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useVideoTexture, RoundedBox } from '@react-three/drei';

export default function PhoneModel() {
  const group = useRef();
  
  const texture = useVideoTexture('/tiktok_player.mp4', { muted: true, loop: true, start: true });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.1;
    group.current.rotation.x = Math.cos(t / 2) * 0.1;
    group.current.position.y = Math.sin(t / 1.5) * 0.1;
  });

  return (
    <group ref={group} dispose={null}>
      {/* Phone Body */}
      <RoundedBox args={[2.2, 4.5, 0.2]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.8} />
      </RoundedBox>
      
      {/* Phone Screen */}
      <mesh position={[0, 0, 0.101]}>
        <planeGeometry args={[2.0, 4.3]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
}
