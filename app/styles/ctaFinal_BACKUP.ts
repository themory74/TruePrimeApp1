import {StyleSheet} from 'react-native';

/**
 * ✅ Final CTA Design v1.0 — Approved 2025-11-02
 * True Prime Digital LLC
 * Locked for production use only.
 */

/**
 * ⚠️ Do NOT modify or override these styles.
 * Locked by Design Approval (True Prime Digital LLC).
 */

/**
 * 📦 Backup copy of final CTA design v1.0 — Do not edit.
 */

// Primary Button (Blue Metallic Consultation) — Styles
export const PRIMARY_BTN_CONTAINER = StyleSheet.create({
  primaryBtnWrapper: {
    width: 320,
    height: 70,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: '#0077FF',
    shadowColor: '#001C4A',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 7,
    elevation: 12,
    borderWidth: 1.3,
    borderColor: '#00BFFF',
  },
  primaryGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
  },
  primaryReflection: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
  },
  primaryInnerShadow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
  },
  primaryShimmer: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  primaryTxt: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  primaryTouch: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});

// Primary Button (Blue Metallic Consultation) — Data
export const PRIMARY_BTN_DATA = {
  gradientColors: ['#009BFF', '#005BEA', '#002F88'],
  gradientStart: {x: 0, y: 0},
  gradientEnd: {x: 1, y: 1},
  reflectionColors: ['rgba(255,255,255,0.08)', 'transparent'],
  reflectionStart: {x: 0, y: 0},
  reflectionEnd: {x: 1, y: 0.5},
  innerShadowColors: ['transparent', 'rgba(0,0,0,0.25)'],
  innerShadowStart: {x: 0, y: 0.7},
  innerShadowEnd: {x: 0, y: 1},
  shimmerColors: ['transparent', 'rgba(255,255,255,0.3)', 'transparent'],
  shimmerStart: {x: 0, y: 0},
  shimmerEnd: {x: 1, y: 1},
  textContent: 'GET A FREE CONSULTATION',
  shimmerDistance: 320 * 1.6,
};

// Secondary Button (Gold Metallic Services) — Styles
export const SECONDARY_BTN_CONTAINER = StyleSheet.create({
  secondaryBtnWrapper: {
    width: 320,
    height: 70,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#E7C860',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    shadowColor: 'rgba(139,105,20,0.7)',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  secondaryGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
    opacity: 0.3,
  },
  secondaryReflection: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
  },
  secondaryOverlayReflection: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
  },
  secondaryInnerShadow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
  },
  secondaryShimmer: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  secondaryTxt: {
    color: '#FFFBE8',
    fontWeight: '800',
    fontSize: 19.5,
    textAlign: 'center',
    letterSpacing: 0.4,
    textShadowColor: 'rgba(255,255,255,0.4)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3,
  },
  secondaryTouch: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});

// Secondary Button (Gold Metallic Services) — Data
export const SECONDARY_BTN_DATA = {
  gradientColors: ['#FFF7C1', '#EBCB5F', '#B48A1E'],
  gradientStart: {x: 0, y: 0},
  gradientEnd: {x: 1, y: 1},
  reflectionColors: ['rgba(255,255,255,0.25)', 'transparent'],
  reflectionStart: {x: 0, y: 0},
  reflectionEnd: {x: 0, y: 0.8},
  overlayReflectionColors: ['rgba(255,255,255,0.15)', 'transparent'],
  overlayReflectionStart: {x: 0, y: 0},
  overlayReflectionEnd: {x: 0.6, y: 0.6},
  innerShadowColors: ['transparent', 'rgba(0,0,0,0.4)'],
  innerShadowStart: {x: 0, y: 0.7},
  innerShadowEnd: {x: 0, y: 1},
  shimmerColors: ['transparent', 'rgba(255,245,200,0.35)', 'transparent'],
  shimmerStart: {x: 0, y: 0},
  shimmerEnd: {x: 1, y: 1},
  textContent: 'VIEW SERVICES',
  shimmerDistance: 320 * 1.6,
};

// Container Styles
export const CTA_CONTAINER_STYLES = StyleSheet.create({
  ctaBlock: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
    marginTop: 40,
    marginBottom: 75,
  },
  buttonWrapper: {
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    width: 320,
  },
  shimmerContainer: {
    position: 'absolute',
    width: 320 * 1.6,
    height: 70,
    top: 0,
    left: 0,
  },
});