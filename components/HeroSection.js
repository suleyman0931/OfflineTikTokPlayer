"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import PhoneModel from './PhoneModel';
import { Download, Volume2, VolumeX } from 'lucide-react';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Make the model 3x larger as requested
    const handleResize = () => setScale(window.innerWidth < 768 ? 4.0 : 3.0);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSound = () => {
    const video = document.querySelector('video');
    if (video) {
      video.muted = !video.muted;
      video.play().catch(e => console.log('Autoplay prevented:', e));
      setIsMuted(video.muted);
    }
  };

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
          <Suspense fallback={null}>
            <group scale={scale}>
              <PhoneModel />
            </group>
          </Suspense>
          <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
        </Canvas>
        
        <div style={{ textAlign: 'center', marginTop: '20px', position: 'relative', zIndex: 20 }}>
          <button 
            onClick={toggleSound}
            className="btn btn-secondary"
            style={{ padding: '10px 24px', fontSize: '1rem', background: 'rgba(255,255,255,0.1)' }}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            {isMuted ? "Unmute Video" : "Mute Video"}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
