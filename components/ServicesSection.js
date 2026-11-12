"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Smartphone, Globe, Mail, Phone } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile apps',
    desc: 'Native and cross-platform apps for iOS and Android.',
  },
  {
    icon: Globe,
    title: 'Websites',
    desc: 'Responsive, fast landing pages and marketing sites.',
  },
  {
    icon: Monitor,
    title: 'Desktop software',
    desc: 'Windows, macOS, and Linux apps built for real work.',
  },
  {
    icon: Code,
    title: 'Web applications',
    desc: 'Scalable, dynamic products that grow with you.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-intro"
        >
          <h2 className="section-title">Need a custom app?</h2>
          <p className="section-lead">
            Professional development to take an idea from sketch to shipping.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="feature-card glass">
              <Icon className="feature-icon" aria-hidden="true" />
              <h3 className="feature-title">{title}</h3>
              <p className="feature-desc">{desc}</p>
            </article>
          ))}
        </div>

        <motion.div
          id="contact"
          className="contact-card glass"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/img_pfpuooh0.png"
            alt="Suleyman Abdu"
            className="contact-photo"
          />
          <div className="contact-copy">
            <h3>Suleyman Abdu</h3>
            <p className="contact-role">Lead Developer</p>
            <a href="mailto:suleymanabdu0931@gmail.com" className="contact-link">
              <Mail size={18} />
              suleymanabdu0931@gmail.com
            </a>
            <a href="tel:+251931798929" className="contact-link">
              <Phone size={18} />
              0931 798 929
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
