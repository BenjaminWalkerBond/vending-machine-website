import BackgroundImageWrapper from './BackgroundImageWrapper';
import './HeroSection.css';

const panels = [
  { text: 'Modern' },
  { text: 'Smart Cooler' },
  { text: 'Amenities' }
];

function HeroSection() {
  return (
    <BackgroundImageWrapper pixelated>
      <section className="hero-section pixel-bg">
        <div className="hero-panels-row">
          <div className="hero-panel responsive-panel">
            <span className="pixel-text flicker flicker-delay-0 responsive-text">
              Modern Smart Cooler Amenities
            </span>
          </div>
          {/* Panels for wide screens only */}
          {panels.map((panel, idx) => (
            <div
              key={panel.text}
              className={`hero-panel wide-panel`}
              style={{ zIndex: idx }}
            >
              <span
                className={`pixel-text flicker flicker-delay-${idx}`}
              >
                {panel.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </BackgroundImageWrapper>
  );
}

export default HeroSection;
