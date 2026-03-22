import { createGlobalStyle, keyframes } from 'styled-components';

// Subtle animations for page elements
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    min-height: 100vh;
    line-height: 1.5;
    
    /* Subtle field pattern background */
    background-image: 
      radial-gradient(ellipse at 50% 0%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(34, 197, 94, 0.04) 0%, transparent 40%),
      radial-gradient(ellipse at 20% 90%, rgba(16, 185, 129, 0.05) 0%, transparent 40%);
    background-attachment: fixed;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.text.disabled};
    }
  }

  /* Selection color */
  ::selection {
    background: rgba(34, 197, 94, 0.3);
    color: inherit;
  }
`;

export const theme = {
  colors: {
    // Primary green - futsal field accent
    primary: '#22c55e',
    primaryHover: '#16a34a',
    primaryLight: 'rgba(34, 197, 94, 0.15)',
    
    // Secondary - warm accent
    secondary: '#f59e0b',
    secondaryHover: '#d97706',
    
    // Status colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    
    // Dark theme backgrounds
    background: '#0f1419',
    backgroundSecondary: '#151c24',
    surface: '#1c2632',
    surfaceHover: '#243040',
    surfaceElevated: '#263344',
    
    // Text colors
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
      disabled: '#64748b',
      accent: '#22c55e',
    },
    
    // Border
    border: '#2d3d4f',
    borderLight: '#374151',
    
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      card: 'linear-gradient(135deg, #1c2632 0%, #263344 100%)',
      hero: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 163, 74, 0.05) 100%)',
      glow: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
    },
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
  },
  
  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.25)',
    md: '0 4px 16px rgba(0, 0, 0, 0.3)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.4)',
    glow: '0 0 20px rgba(34, 197, 94, 0.3)',
    glowStrong: '0 0 40px rgba(34, 197, 94, 0.4)',
  },
  
  transitions: {
    fast: '0.15s ease',
    normal: '0.25s ease',
    slow: '0.4s ease',
    bounce: '0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  typography: {
    heading: "'Outfit', sans-serif",
    body: "'DM Sans', sans-serif",
  },
};

// Type declarations for styled-components
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    spacing: typeof theme.spacing;
    borderRadius: typeof theme.borderRadius;
    shadows: typeof theme.shadows;
    transitions: typeof theme.transitions;
    typography: typeof theme.typography;
  }
}

