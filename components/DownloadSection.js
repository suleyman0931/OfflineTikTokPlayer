"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Zap } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download" className="download-section">
      <motion.h2 
        className="download-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Ready to go <span className="text-glow-primary" style={{ color: 'var(--accent-primary)' }}>Offline?</span>
      </motion.h2>
      
      <motion.div 
        className="download-box glass"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
            <ShieldCheck size={20} color="var(--accent-secondary)" />
            <span>Secure APK</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
            <Zap size={20} color="var(--accent-primary)" />
            <span>Fast Download</span>
          </div>
        </div>

        <p style={{ fontSize: '1.2rem', maxWidth: '400px', lineHeight: '1.6' }}>
          Get the latest version of the Offline TikTok Player for Android.
        </p>

        {/* Note: Update the href below when the actual APK is available */}
        <a href="/app-release.apk" download className="btn btn-primary" style={{ width: '100%', padding: '20px' }}>
          <Download size={28} />
          Download APK (v1.0.0)
        </a>
      </motion.div>
    </section>
  );
}
