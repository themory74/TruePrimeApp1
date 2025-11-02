import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
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

export default function HomeScreen() {
  const navigation: any = useNavigation();
  
  // Shimmer animations
  const primaryShimmerAnim = useRef(new Animated.Value(0)).current;
  const secondaryShimmerAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
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
                    safeNavigate('GetConsultant', 'https://trueprimedigital.com/#contact')
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

          {/* Footer */}
          <View style={styles.footerWrap}>
            <Text style={styles.footer}>© 2025 True Prime Digital LLC</Text>
          </View>
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

  /** Footer */
  footerWrap: {
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    color: '#80848C',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});
