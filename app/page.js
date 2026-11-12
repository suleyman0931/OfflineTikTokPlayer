import React from 'react';
import SiteHeader from '../components/SiteHeader';
import HeroSection from '../components/HeroSection';
import DownloadSection from '../components/DownloadSection';
import ServicesSection from '../components/ServicesSection';
import { Play, Smartphone, WifiOff } from 'lucide-react';

export default function Home() {
  return (
    <div id="top" className="app-container">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <SiteHeader />

      <main id="main">
        <HeroSection />

        <section id="features" className="features-section">
          <div className="section-inner">
            <h2 className="section-title">Built for real-world use</h2>
            <p className="section-lead">
              Offline-first playback that still feels like a native social app.
            </p>
            <div className="features-grid">
              <article className="feature-card glass">
                <WifiOff className="feature-icon" aria-hidden="true" />
                <h3 className="feature-title">True offline</h3>
                <p className="feature-desc">
                  Watch favorite short videos anytime. No connection needed after download.
                </p>
              </article>
              <article className="feature-card glass">
                <Play className="feature-icon" aria-hidden="true" />
                <h3 className="feature-title">Smooth playback</h3>
                <p className="feature-desc">
                  Vertical video tuned for phones, tablets, and larger screens.
                </p>
              </article>
              <article className="feature-card glass">
                <Smartphone className="feature-icon" aria-hidden="true" />
                <h3 className="feature-title">Native feel</h3>
                <p className="feature-desc">
                  Built to stay light on battery while staying snappy.
                </p>
              </article>
            </div>
          </div>
        </section>

        <DownloadSection />
        <ServicesSection />
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Offline TikTok Player. All rights reserved.</p>
      </footer>
    </div>
  );
}
