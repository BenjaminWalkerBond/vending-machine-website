// src/styles/tokens.css.ts
import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    bg: '#F5F7FB',         // Mist
    surface: '#FFFFFF',
    ink: '#0E1320',
    muted: '#5B6477',
    line: '#E4E8F2',
    blue: '#4F8DF5',       // River blue
    purple: '#6C63FF',     // Indigo / Purple
    orange: '#FF9A3E',     // Accent
    blueSoft: '#E8F0FF',
    purpleSoft: '#ECEBFF',
  },
  radius: {
    sm: '10px',
    md: '16px',
    lg: '20px',
    pill: '999px',
  },
  shadow: {
    soft: '0 8px 24px rgba(14,19,32,0.08)',
    hover: '0 12px 32px rgba(14,19,32,0.12)',
  },
  space: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '40px',
    xxl: '64px',
  },
  type: {
    // fluid clamp for “expensive” typography
    h1: 'clamp(40px, 6vw, 64px)',
    h2: 'clamp(28px, 3.8vw, 40px)',
    h3: 'clamp(20px, 2.6vw, 26px)',
    body: 'clamp(16px, 1.5vw, 18px)',
  },
})
