import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
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

const {width} = Dimensions.get('window');

const services = [
  {
    title: 'Web & App Development / Design (Full-Stack)',
    description: 'Custom websites and mobile apps built with cutting-edge technology.',
  },
  {
    title: 'SEO & Local SEO',
    description: 'Boost your visibility and dominate local search rankings.',
  },
  {
    title: 'Google Ads / PPC Management',
    description: 'Maximize ROI with strategic paid advertising campaigns.',
  },
  {
    title: 'Analytics, CRO & Automation',
    description: 'Data-driven insights and automated workflows for growth.',
  },
  {
    title: 'Consulting & Strategy Sessions',
    description: 'Expert guidance to elevate your digital presence.',
  },
];

export default function ServicesScreen() {
  const navigation: any = useNavigation();

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
      // Fallback URL handling if needed
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
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.title}>Our Services</Text>
            <LinearGradient
              colors={['#0077FF', '#D4AF37']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.titleUnderline}
            />
            <Text style={styles.subtitle}>Digital Solutions. Prime Results.</Text>
          </View>

          {/* Services Cards Section */}
          <View style={styles.servicesContainer}>
            {services.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={styles.cardWrapper}
                onPress={() =>
                  navigation.navigate('ServiceDetail', {
                    title: service.title,
                    description: service.description,
                  })
                }
                activeOpacity={0.9}>
                <LinearGradient
                  colors={['#0A0F2C', '#0077FF']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.cardGradient}>
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{service.title}</Text>
                    <Text style={styles.cardDescription}>{service.description}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>

          {/* CTA Buttons */}
          <View style={CTA_CONTAINER_STYLES.ctaBlock}>
            {/* Primary Button: Get a Free Consultation */}
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
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Consultation');
                  }}
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

            {/* Secondary Button: Back to Home */}
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
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Home');
                  }}
                  activeOpacity={0.95}
                  style={SECONDARY_BTN_CONTAINER.secondaryTouch}>
                  <Text
                    style={SECONDARY_BTN_CONTAINER.secondaryTxt}
                    numberOfLines={2}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.92}>
                    Back to Home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#020916',
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
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 80,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  titleUnderline: {
    width: '45%',
    height: 3,
    borderRadius: 2,
    marginBottom: 12,
  },
  subtitle: {
    color: '#AEBAC2',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 4,
  },
  servicesContainer: {
    width: '100%',
    marginBottom: 40,
  },
  cardWrapper: {
    marginBottom: 18,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#001C4A',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 8,
  },
  cardGradient: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
    position: 'relative',
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  cardDescription: {
    fontSize: 14,
    color: '#D0D0D0',
    lineHeight: 20,
  },
});