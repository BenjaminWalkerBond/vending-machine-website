// utils/smoothScroll.js
import { handleButtonClick } from './buttonHandlers';

/**
 * Initializes smooth scrolling for all hash links on the page
 */
export function initSmoothScrolling() {
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Find all links that have hash fragment URLs
    const hashLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    // Add click handler to each link
    hashLinks.forEach(link => {
      link.addEventListener('click', handleButtonClick);
    });
  });
}

/**
 * Utility to apply smooth scrolling to a React component on mount
 * Use this in components that dynamically render hash links
 */
export function applySmoothScrolling() {
  const hashLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  hashLinks.forEach(link => {
    // Only add listener if it doesn't already have one
    const hasListener = link.getAttribute('data-smooth-scroll') === 'true';
    if (!hasListener) {
      link.addEventListener('click', handleButtonClick);
      link.setAttribute('data-smooth-scroll', 'true');
    }
  });
}
