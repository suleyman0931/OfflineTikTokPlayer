"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import PhoneModel from './PhoneModel';
import { Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">
          The Ultimate <br/>
          <span>Offline Experience</span>
        </h1>
        <p className="hero-subtitle">
          Download the Offline TikTok Player and enjoy your favorite vertical videos without an internet connection. Native performance, zero lag, true freedom.
        </p>
        <motion.a 
          href="#download" 
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={24} />
          Download APK Now
        </motion.a>
      </motion.div>

      <motion.div 
        className="hero-3d-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Environment preset="city" />
          <PhoneModel />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
        </Canvas>
      </motion.div>
    </section>
  );
}
