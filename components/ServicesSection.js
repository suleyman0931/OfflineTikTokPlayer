"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Smartphone, Globe, Mail, Phone } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="services-section" style={{ padding: '100px 5%', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Need a Custom App?</h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            We provide professional development services to bring your ideas to life.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          <div className="feature-card glass">
            <Smartphone className="feature-icon" />
            <h3 className="feature-title">Mobile App Development</h3>
            <p className="feature-desc">Native and cross-platform apps for iOS and Android.</p>
          </div>
          <div className="feature-card glass">
            <Globe className="feature-icon" />
            <h3 className="feature-title">Website Development</h3>
            <p className="feature-desc">Beautiful, responsive, and SEO-optimized landing pages and websites.</p>
          </div>
          <div className="feature-card glass">
            <Monitor className="feature-icon" />
            <h3 className="feature-title">Desktop Applications</h3>
            <p className="feature-desc">Powerful desktop software for Windows, macOS, and Linux.</p>
          </div>
          <div className="feature-card glass">
            <Code className="feature-icon" />
            <h3 className="feature-title">Web App Development</h3>
            <p className="feature-desc">Complex, scalable, and dynamic web applications.</p>
          </div>
        </div>

        <motion.div 
          className="glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', padding: '40px', alignItems: 'center', justifyContent: 'center' }}
        >
          <img 
            src="/img_pfpuooh0.png" 
            alt="Suleyman Abdu" 
            style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--accent-primary)' }}
          />
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>Suleyman Abdu</h3>
            <p className="text-muted" style={{ marginBottom: '20px' }}>Lead Developer</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:suleymanabdu0931@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none' }}>
                <Mail size={20} color="var(--accent-secondary)" />
                <span>suleymanabdu0931@gmail.com</span>
              </a>
              <a href="tel:0931798929" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none' }}>
                <Phone size={20} color="var(--accent-secondary)" />
                <span>0931798929</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
