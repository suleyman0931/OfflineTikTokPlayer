"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Volume2, VolumeX } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    video.play().catch(() => {});
    setIsMuted(video.muted);
  };

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">Android · Offline playback</p>
        <h1 id="hero-title" className="hero-title">
          Watch saved TikToks
          <span>anywhere, offline.</span>
        </h1>
        <p className="hero-subtitle">
          Download the Offline TikTok Player and enjoy vertical videos with native performance, zero lag, and no internet.
        </p>
        <div className="hero-actions">
          <motion.a
            href="#download"
            className="btn btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={20} />
            Download APK
          </motion.a>
          <a href="#features" className="btn btn-secondary">See features</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-preview"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="phone-frame">
          <video
            ref={videoRef}
            src="/tiktok_player.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            controls={false}
            className="phone-video"
          />
        </div>

        <button
          type="button"
          onClick={toggleSound}
          className="btn btn-secondary sound-toggle"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          {isMuted ? 'Unmute preview' : 'Mute preview'}
        </button>
      </motion.div>
    </section>
  );
}
