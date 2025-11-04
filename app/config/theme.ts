// ============================================================
// 🔰 TRUE PRIME DIGITAL — SHARED THEME CONFIGURATION
// ============================================================
// This file contains the centralized theme constants for the
// True Prime Digital app. All screens should import from here
// to maintain consistent branding across the application.
//
// Usage:
//   import { COLORS, FONTS } from '../config/theme';
//
// ============================================================

export const COLORS = {
  // Primary Brand Colors
  background: '#0A0F2C', // Deep navy base
  gold: '#D4AF37', // Gold accent
  white: '#FFFFFF', // White text
  blue: '#0077FF', // Prime blue (gradient end)
  
  // Additional Colors
  gray: '#80848C', // Footer text
  lightGray: '#E0E0E0', // Secondary text
  
  // Gradient Colors (for LinearGradient)
  gradient: {
    start: '#0A0F2C', // Deep navy
    end: '#0077FF', // Prime blue
  },
};

export const FONTS = {
  bold: 'Poppins-Bold',
  semi: 'Poppins-SemiBold',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
};

// Typography Sizes
export const TYPOGRAPHY = {
  h1: 36,
  h2: 28,
  h3: 22,
  body: 16,
  small: 14,
  caption: 12,
};

// Spacing Constants
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

