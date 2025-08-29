import React from 'react';
import './BackgroundImageWrapper.css';

const BackgroundImageWrapper = ({ children, pixelated }) => (
  <div className={`background-image-wrapper ${pixelated ? 'pixelated' : ''}`}>
    <div className="background-image" />
    <div className="background-image-overlay" />
    <div className="background-content">
      {children}
    </div>
  </div>
);

export default BackgroundImageWrapper;
