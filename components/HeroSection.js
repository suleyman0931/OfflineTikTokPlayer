"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Volume2, VolumeX } from 'lucide-react';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Just handling resize if needed for other UI parts
    const handleResize = () => setScale(window.innerWidth < 768 ? 1.2 : 1);
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
        <div style={{ position: 'relative', width: '100%', maxWidth: '280px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', border: '4px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <video 
            src="/tiktok_player.mp4" 
            autoPlay 
            loop 
            muted={isMuted}
            playsInline
            controls={false}
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
          />
        </div>
        
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
