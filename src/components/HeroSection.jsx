import React from 'react';
import coolerImg from '../assets/micromart_side_view_transparent.png';


const RiverIllustration = () => (
  <svg
    className="hero-illustration"
    viewBox="0 0 800 400"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
   
    <circle cx="550" cy="275" r="120" fill="#ffb773ff" opacity="1" />

<g transform="translate(0, 40)" fill="none" strokeLinecap="round">
 
  <path
    d="M0 300 Q140 300 300 300 T560 250 T800 260"
    stroke="#CFE6B5"
    strokeWidth="50"
    opacity="1"
  />

  <path
    d="M0 255 Q150 200 220 268 T640 262 T800 275"
    stroke="#A8D080"
    strokeWidth="40"
    opacity="1"
  />
 
  <path
    d="M0 400 Q180 265 360 282 T720 276 T800 288"
    stroke="#86AA50"
    strokeWidth="35"
    opacity="1"
  />
</g>


    <path d="M0 270 Q100 210 400 300 T800 300 V400 H0 Z" fill="var(--blue-50)" />
    <path d="M0 320 Q200 280 400 320 T800 320 V400 H0 Z" fill="var(--color-primary)" />
    <path d="M0 340 Q200 300 400 340 T800 340 V400 H0 Z" fill="var(--color-primary-600)" />
  </svg>
);



export default function HeroSection() {
  return (
    <header id="top" className="section hero-wrap wave-edge">
      <div className="hero-card">
        <RiverIllustration />

        <div className="hero-grid">
          <div>
            <span className="section-eyebrow">Local • San Marcos</span>
            <h1 className="title-rule" style={{ marginTop: 12 }}>
              Modern Micro Markets for Shared Spaces
            </h1>
            <p className="lead" style={{ marginTop: 12 }}>
              Snacks, drinks, and commodities at no cost to the business. We install, monitor, and restock, so you can focus on your people.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
              <a href="#contact" className="cta-btn">Get a Free Placement</a>
              <a href="#solutions" className="cta-btn cta-btn--ghost">Our Features</a>
            </div>
          </div>

          <div className="hero-art-wrapper">
            <img src={coolerImg} alt="Smart Cooler in breakroom" className="hero-cooler-img" />
          </div>
        </div>
      </div>
    </header>
  );
}
