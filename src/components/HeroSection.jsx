import { useState, useEffect, useRef } from 'react';
import BackgroundImageWrapper from './BackgroundImageWrapper';
import './HeroSection.css';

// Immediately log when the file is imported
console.log('HeroSection component file loaded');

const panels = [
  { text: 'Modern' },
  { text: 'Smart Cooler' },
  { text: 'Amenities' }
];

function HeroSection() {
  console.log('HeroSection component rendering');
  
  // Use state to track which panel should be flickering
  const [flickeringPanel, setFlickeringPanel] = useState(null);
  // Use ref to track if we're in the middle of a flicker sequence
  const isFlickeringRef = useRef(false);
  
  // Simple interval-based flickering with reduced frequency
  useEffect(() => {
    console.log('Setting up flickering effect');
    
    // Wait for initial animations to complete
    const initialDelay = 3000;
    
    // Function to trigger a random flicker
    const triggerRandomFlicker = () => {
      // Don't start a new flicker if one is already in progress
      if (isFlickeringRef.current) {
        // Reschedule and try again later
        const retryDelay = 2000;
        setTimeout(triggerRandomFlicker, retryDelay);
        return;
      }
      
      // We're starting a flicker sequence
      isFlickeringRef.current = true;
      
      // Options: 'responsive' or 0-2 for individual panels
      const options = ['responsive', 0, 1, 2];
      const randomIndex = Math.floor(Math.random() * options.length);
      const selectedPanel = options[randomIndex];
      
      // Set the flickering panel
      setFlickeringPanel(selectedPanel);
      
      // Clear after animation duration
      setTimeout(() => {
        // Check if we should trigger the next panel (50% chance)
        const shouldTriggerNextPanel = Math.random() > 0.5;
        
        if (shouldTriggerNextPanel) {
          // Determine the next panel in sequence
          let nextPanel;
          if (selectedPanel === 'responsive') {
            nextPanel = 0;
          } else if (selectedPanel === 2) {
            nextPanel = 'responsive';
          } else {
            nextPanel = selectedPanel + 1;
          }
          
          // Trigger the next panel
          setFlickeringPanel(nextPanel);
          
          // Clear after animation duration and end the sequence
          setTimeout(() => {
            setFlickeringPanel(null);
            isFlickeringRef.current = false; // Sequence is done
          }, 700);
        } else {
          // Just end the sequence
          setFlickeringPanel(null);
          isFlickeringRef.current = false; // Sequence is done
        }
      }, 700);
      
      // Schedule next flicker with longer random delay (5-15 seconds)
      const nextDelay = 5000 + Math.random() * 4000;
      setTimeout(triggerRandomFlicker, nextDelay);
    };
    
    // Start the flickering after initial delay
    const startTimerId = setTimeout(triggerRandomFlicker, initialDelay);
    
    return () => {
      clearTimeout(startTimerId);
    };
  }, []);
  
  return (
    <BackgroundImageWrapper pixelated>
      <section className="hero-section pixel-bg">
        <div className="hero-panels-row">
          <div className="hero-panel responsive-panel">
            <span 
              className={`pixel-text flicker flicker-delay-0 responsive-text ${flickeringPanel === 'responsive' ? 'random-flicker' : ''}`}
            >
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
                className={`pixel-text flicker flicker-delay-${idx} ${flickeringPanel === idx ? 'random-flicker' : ''}`}
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
