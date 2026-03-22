import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryLight: string;
      secondary: string;
      secondaryHover: string;
      success: string;
      warning: string;
      error: string;
      info: string;
      background: string;
      backgroundSecondary: string;
      surface: string;
      surfaceHover: string;
      surfaceElevated: string;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        accent: string;
      };
      border: string;
      borderLight: string;
      gradients: {
        primary: string;
        card: string;
        hero: string;
        glow: string;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      glow: string;
      glowStrong: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
      bounce: string;
    };
    typography: {
      heading: string;
      body: string;
    };
  }
}

