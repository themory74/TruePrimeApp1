// ============================================================
// 🔰 TRUE PRIME DIGITAL — OFFICIAL APP FOUNDATION
// Version: 1.0 — Stable Build (Home + Footer)
// Status: Production-Ready (Baseline Theme)
// Description:
//   This version represents the core foundation of the True Prime Digital App.
//   It includes the fully verified Home Screen and Footer components,
//   built with the official True Prime Digital theme (Prime Blue, Gold, White).
//
//   HomeScreen.tsx:
//     - Displays logo, title, tagline, and CTA buttons
//     - Routes: Get Consultation, View Services
//
//   Footer_Backup.tsx:
//     - Displays About | Contact | Settings links
//     - Includes copyright text and gold separator line
//
// Color Palette:
//   - Prime Blue: #0A0F2C
//   - Gradient Blue: #0077FF
//   - Gold: #D4AF37
//   - White: #FFFFFF
//
// Build Date: November 3, 2025
// Author: True Prime Digital Dev Team
// ============================================================

import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Linking,
  Animated,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {
  PRIMARY_BTN_CONTAINER,
  PRIMARY_BTN_DATA,
  SECONDARY_BTN_CONTAINER,
  SECONDARY_BTN_DATA,
  CTA_CONTAINER_STYLES,
} from '../styles/ctaFinal';

const {height, width} = Dimensions.get('window');

// Animated Underline Component for Footer Links
const AnimatedUnderline = ({active}: {active: boolean}) => {
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: active ? 1 : 0,
      duration: 400,
      easing: Easing.out(Easing.exp),
      useNativeDriver: false,
    }).start();
  }, [active, widthAnim]);

  return (
    <Animated.View
      style={{
        width: widthAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '100%'],
        }),
        height: 2,
        backgroundColor: '#D4AF37',
        borderRadius: 4,
        marginTop: 4,
        shadowColor: '#D4AF37',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 2,
      }}
    />
  );
};

export default function HomeScreen() {
  const navigation: any = useNavigation();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  
  // Shimmer animations
  const primaryShimmerAnim = useRef(new Animated.Value(0)).current;
  const secondaryShimmerAnim = useRef(new Animated.Value(0)).current;
  
  // Copyright fade-in animation
  const copyrightOpacity = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    // Copyright fade-in animation on mount
    Animated.timing(copyrightOpacity, {
      toValue: 1,
      duration: 800,
      delay: 300,
      useNativeDriver: true,
    }).start();
    
    // Primary button shimmer animation
    const primaryShimmer = Animated.loop(
      Animated.sequence([
        Animated.delay(6000),
        Animated.timing(primaryShimmerAnim, {
          toValue: 1,
          duration: 4500,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(primaryShimmerAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );
    
    // Secondary button shimmer animation (with 1.5s offset for async effect)
    const secondaryShimmer = Animated.loop(
      Animated.sequence([
        Animated.delay(7500),
        Animated.timing(secondaryShimmerAnim, {
          toValue: 1,
          duration: 4500,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(secondaryShimmerAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );
    
    primaryShimmer.start();
    secondaryShimmer.start();
    
    return () => {
      primaryShimmer.stop();
      secondaryShimmer.stop();
    };
  }, [primaryShimmerAnim, secondaryShimmerAnim]);

  const safeNavigate = (routeName: string, fallbackUrl: string) => {
    try {
      if (navigation && typeof navigation.navigate === 'function') {
        navigation.navigate(routeName as never);
        return;
      }
    } catch (e) {
      // ignore and fallback
    }
    if (fallbackUrl) {
      Linking.openURL(fallbackUrl).catch(() => {});
    }
  };

  return (
    <View style={styles.root}>
      {/* Full-screen luxury gradient behind everything */}
      <LinearGradient
        colors={['#020916', '#001A3C', '#0046A3']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.gradientBg}
      />

      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {/* Header / Brand Block */}
          <View style={styles.header}>
            <View style={styles.logoWrapper}>
              <Image
                source={require('../assets/trueprime_logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.title}>
              <Text style={styles.true}>TRUE</Text>
              <Text style={styles.prime}> PRIME</Text>
              <Text style={styles.digital}> DIGITAL</Text>
            </Text>

            <LinearGradient
              colors={['#0077FF', '#D4AF37']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.divider}
            />

            <Text style={styles.tagline}>Digital Solutions. Prime Results.</Text>
          </View>

          {/* CTA Block (guaranteed visible) */}
          <View style={CTA_CONTAINER_STYLES.ctaBlock}>
            <View style={CTA_CONTAINER_STYLES.buttonWrapper}>
              <View style={PRIMARY_BTN_CONTAINER.primaryBtnWrapper}>
                <LinearGradient
                  colors={PRIMARY_BTN_DATA.gradientColors}
                  start={PRIMARY_BTN_DATA.gradientStart}
                  end={PRIMARY_BTN_DATA.gradientEnd}
                  style={PRIMARY_BTN_CONTAINER.primaryGradient}
                  pointerEvents="none"
                />
                <LinearGradient
                  colors={PRIMARY_BTN_DATA.reflectionColors}
                  start={PRIMARY_BTN_DATA.reflectionStart}
                  end={PRIMARY_BTN_DATA.reflectionEnd}
                  style={PRIMARY_BTN_CONTAINER.primaryReflection}
                  pointerEvents="none"
                />
                <LinearGradient
                  colors={PRIMARY_BTN_DATA.innerShadowColors}
                  start={PRIMARY_BTN_DATA.innerShadowStart}
                  end={PRIMARY_BTN_DATA.innerShadowEnd}
                  style={PRIMARY_BTN_CONTAINER.primaryInnerShadow}
                  pointerEvents="none"
                />
                <Animated.View
                  style={[
                    CTA_CONTAINER_STYLES.shimmerContainer,
                    {
                      transform: [
                        {
                          translateX: primaryShimmerAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-PRIMARY_BTN_DATA.shimmerDistance, PRIMARY_BTN_DATA.shimmerDistance],
                          }),
                        },
                      ],
                    },
                  ]}
                  pointerEvents="none">
                  <LinearGradient
                    colors={PRIMARY_BTN_DATA.shimmerColors}
                    start={PRIMARY_BTN_DATA.shimmerStart}
                    end={PRIMARY_BTN_DATA.shimmerEnd}
                    style={PRIMARY_BTN_CONTAINER.primaryShimmer}
                  />
                </Animated.View>
                <TouchableOpacity
                  onPress={() =>
                    safeNavigate('Consultation', 'https://trueprimedigital.com/#contact')
                  }
                  activeOpacity={0.95}
                  style={PRIMARY_BTN_CONTAINER.primaryTouch}>
                  <Text
                    style={PRIMARY_BTN_CONTAINER.primaryTxt}
                    numberOfLines={2}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.92}>
                    {PRIMARY_BTN_DATA.textContent}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={CTA_CONTAINER_STYLES.buttonWrapper}>
              <View style={SECONDARY_BTN_CONTAINER.secondaryBtnWrapper}>
                <LinearGradient
                  colors={SECONDARY_BTN_DATA.gradientColors}
                  start={SECONDARY_BTN_DATA.gradientStart}
                  end={SECONDARY_BTN_DATA.gradientEnd}
                  style={SECONDARY_BTN_CONTAINER.secondaryGradient}
                  pointerEvents="none"
                />
                <LinearGradient
                  colors={SECONDARY_BTN_DATA.reflectionColors}
                  start={SECONDARY_BTN_DATA.reflectionStart}
                  end={SECONDARY_BTN_DATA.reflectionEnd}
                  style={SECONDARY_BTN_CONTAINER.secondaryReflection}
                  pointerEvents="none"
                />
                <LinearGradient
                  colors={SECONDARY_BTN_DATA.overlayReflectionColors}
                  start={SECONDARY_BTN_DATA.overlayReflectionStart}
                  end={SECONDARY_BTN_DATA.overlayReflectionEnd}
                  style={SECONDARY_BTN_CONTAINER.secondaryOverlayReflection}
                  pointerEvents="none"
                />
                <LinearGradient
                  colors={SECONDARY_BTN_DATA.innerShadowColors}
                  start={SECONDARY_BTN_DATA.innerShadowStart}
                  end={SECONDARY_BTN_DATA.innerShadowEnd}
                  style={SECONDARY_BTN_CONTAINER.secondaryInnerShadow}
                  pointerEvents="none"
                />
                <Animated.View
                  style={[
                    CTA_CONTAINER_STYLES.shimmerContainer,
                    {
                      transform: [
                        {
                          translateX: secondaryShimmerAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-SECONDARY_BTN_DATA.shimmerDistance, SECONDARY_BTN_DATA.shimmerDistance],
                          }),
                        },
                      ],
                    },
                  ]}
                  pointerEvents="none">
                  <LinearGradient
                    colors={SECONDARY_BTN_DATA.shimmerColors}
                    start={SECONDARY_BTN_DATA.shimmerStart}
                    end={SECONDARY_BTN_DATA.shimmerEnd}
                    style={SECONDARY_BTN_CONTAINER.secondaryShimmer}
                  />
                </Animated.View>
                <TouchableOpacity
                  activeOpacity={0.95}
                  onPress={() =>
                    safeNavigate('Services', 'https://trueprimedigital.com/#services')
                  }
                  style={SECONDARY_BTN_CONTAINER.secondaryTouch}>
                  <Text style={SECONDARY_BTN_CONTAINER.secondaryTxt}>
                    {SECONDARY_BTN_DATA.textContent}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* ============================================
              FOOTER SECTION - LOCKED FOR PRODUCTION
              ============================================
              ⚠️ DO NOT MODIFY THIS SECTION ⚠️
              
              This footer section is the official True Prime Digital
              footer design and is locked for production use.
              
              Changes to layout, styling, colors, spacing, or text
              require approval before modification.
              
              Current Design:
              - Footer links: About | Contact | Settings
              - Gold (#D4AF37) top border and separators
              - White text (#FFFFFF) with gold accents
              - Animated underline on press
              - Copyright line with dynamic year
              
              ============================================ */}
          <View style={styles.footerWrap}>
            <View style={styles.footerLinks}>
              {[
                {title: 'About', route: 'About'},
                {title: 'Contact', route: 'Contact'},
                {title: 'Settings', route: 'Settings'},
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <Pressable
                    onPress={() => navigation.navigate(item.route)}
                    onPressIn={() => setActiveLink(item.title)}
                    onPressOut={() => setActiveLink(null)}
                    style={({pressed}) => [
                      styles.footerLinkContainer,
                      pressed && styles.footerLinkPressed,
                    ]}>
                    <Text
                      style={[
                        styles.footerLinkText,
                        activeLink === item.title && styles.footerLinkTextActive,
                      ]}>
                      {item.title}
                    </Text>
                    <AnimatedUnderline active={activeLink === item.title} />
                  </Pressable>
                  {index < 2 && (
                    <Text style={styles.footerDivider}>|</Text>
                  )}
                </React.Fragment>
              ))}
            </View>
            <Animated.Text
              style={[
                styles.footer,
                {
                  opacity: copyrightOpacity,
                },
              ]}>
              © {new Date().getFullYear()} True Prime Digital LLC
            </Animated.Text>
          </View>
          {/* ============================================
              END OF LOCKED FOOTER SECTION
              ============================================ */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

/** STYLES — tuned for sharp, mature, luxury look */
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#020916', // fallback paint under system bars
  },
  gradientBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    minHeight: height - 100,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  /** Header / Brand */
  header: {
    alignItems: 'center',
    maxWidth: 520,
    width: '100%',
  },
  logoWrapper: {
    width: Math.min(140, Math.round(width * 0.38)),
    height: Math.min(140, Math.round(width * 0.38)),
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Math.min(140, Math.round(width * 0.38)),
    height: Math.min(140, Math.round(width * 0.38)),
    shadowColor: '#0050FF',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 4},
    elevation: 8,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 1.2,
    textAlign: 'center',
    marginBottom: 8,
  },
  true: {color: '#FFFFFF'},
  prime: {color: '#00A8FF'},
  digital: {color: '#D4AF37'},

  divider: {
    width: '45%',
    height: 3,
    borderRadius: 2,
    marginVertical: 10,
  },
  tagline: {
    color: '#AEBAC2',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 6,
    marginBottom: 8,
  },

  /** CTAs */
  // CTA styles now locked in app/styles/ctaFinal.ts

  /** ============================================
      FOOTER STYLES - LOCKED FOR PRODUCTION
      ============================================
      ⚠️ DO NOT MODIFY THESE STYLES ⚠️
      
      These footer styles are part of the official
      True Prime Digital brand design system.
      
      All spacing, colors, typography, and effects
      are locked to maintain brand consistency.
      
      ============================================ */
  footerWrap: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#D4AF37',
    marginTop: 20,
  },
  footerLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    gap: 22,
  },
  footerLinkContainer: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 6,
    position: 'relative',
    overflow: 'hidden',
  },
  footerLinkPressed: {
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    transform: [{scale: 0.97}],
    shadowColor: '#D4AF37',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 4,
  },
  footerLinkText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3,
  },
  footerLinkTextActive: {
    color: '#D4AF37',
    textShadowColor: 'rgba(212, 175, 55, 0.8)',
    textShadowRadius: 5,
  },
  footerDivider: {
    color: '#D4AF37',
    fontSize: 14,
    fontWeight: '300',
    opacity: 0.6,
  },
  footer: {
    color: '#80848C',
    fontSize: 12,
    textAlign: 'center',
  },
  /** ============================================
      END OF LOCKED FOOTER STYLES
      ============================================ */
});
