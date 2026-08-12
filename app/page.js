import React from 'react';
import HeroSection from '../components/HeroSection';
import DownloadSection from '../components/DownloadSection';
import { Play, Smartphone, WifiOff } from 'lucide-react';

export default function Home() {
  return (
    <div className="app-container">
      {/* Background animated blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <HeroSection />

      <section className="features-grid">
        <div className="feature-card glass">
          <WifiOff className="feature-icon" />
          <h3 className="feature-title">True Offline Experience</h3>
          <p className="feature-desc">Enjoy your favorite short videos anytime, anywhere. No internet connection required once downloaded.</p>
        </div>
        <div className="feature-card glass">
          <Play className="feature-icon" />
          <h3 className="feature-title">Seamless Playback</h3>
          <p className="feature-desc">Experience buttery smooth, vertical video playback optimized for your device.</p>
        </div>
        <div className="feature-card glass">
          <Smartphone className="feature-icon" />
          <h3 className="feature-title">Native Performance</h3>
          <p className="feature-desc">Built natively to ensure the lowest battery drain and highest performance possible.</p>
        </div>
      </section>

      <DownloadSection />
      
      <footer className="glass" style={{ padding: '30px', textAlign: 'center', marginTop: 'auto', borderRadius: '0', borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
        <p className="text-muted" style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Offline TikTok Player. All rights reserved.</p>
      </footer>
    </div>
  );
}
