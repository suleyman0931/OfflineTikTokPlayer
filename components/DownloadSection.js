"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Zap } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download" className="download-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Ready to go <span className="accent">offline?</span>
      </motion.h2>
      <p className="section-lead">
        Grab the latest Android build and keep watching even when the signal drops.
      </p>

      <motion.div
        className="download-box glass"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <div className="download-pills">
          <span className="pill">
            <ShieldCheck size={18} />
            Secure APK
          </span>
          <span className="pill">
            <Zap size={18} />
            Fast download
          </span>
        </div>

        <p className="download-copy">
          Latest version of Offline TikTok Player for Android.
        </p>

        <a
          href="/Offline%20TikTok%20Player.apk"
          download
          className="btn btn-primary btn-block"
        >
          <Download size={22} />
          Download APK
        </a>
      </motion.div>
    </section>
  );
}
