import React from 'react';
import './BackgroundImageWrapper.css';

const BackgroundImageWrapper = ({ children }) => (
  <div className="background-image-wrapper">
    <div className="background-image" />
    <div className="background-content">
      {children}
    </div>
  </div>
);

export default BackgroundImageWrapper;
