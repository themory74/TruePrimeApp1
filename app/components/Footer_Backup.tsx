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

// 🔒 True Prime Digital — Official Footer Backup (Stable Build)
// Version: HomeScreen 3:26 Build — DO NOT DELETE
//
// This file contains a complete backup of the footer section from HomeScreen.tsx
// including all navigation logic, animations, and styles.
//
// Use this file to restore the footer if modifications are needed.
// DO NOT modify this backup file.

import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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

export default function FooterBackup() {
  const navigation: any = useNavigation();
  const [activeLink, setActiveLink] = useState<string | null>(null);

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
  }, [copyrightOpacity]);

  return (
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
            {index < 2 && <Text style={styles.footerDivider}>|</Text>}
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
  );
}

const styles = StyleSheet.create({
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
});

