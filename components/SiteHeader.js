"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#download', label: 'Download' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="site-header-inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">Offline TikTok Player</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a href="#download" className="btn btn-primary btn-nav">
            <Download size={16} />
            Get APK
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
        ))}
        <a href="#download" className="btn btn-primary" onClick={close}>
          <Download size={18} />
          Download APK
        </a>
      </nav>
    </header>
  );
}
