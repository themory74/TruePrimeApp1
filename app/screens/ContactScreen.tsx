import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
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

export default function ContactScreen() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#0A0F2C', '#0077FF']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.gradientBg}
      />

      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.text}>Email: info@trueprimedigital.com</Text>
            <Text style={styles.text}>Phone: (555) 555-5555</Text>
            <Text style={styles.text}>Website: www.trueprimedigital.com</Text>
            <Text style={styles.placeholder}>Contact form coming soon...</Text>
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

            {/* Secondary Button: View Services */}
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
                    navigation.navigate('Services');
                  }}
                  activeOpacity={0.95}
                  style={SECONDARY_BTN_CONTAINER.secondaryTouch}>
                  <Text
                    style={SECONDARY_BTN_CONTAINER.secondaryTxt}
                    numberOfLines={2}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.92}>
                    {SECONDARY_BTN_DATA.textContent}
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
    backgroundColor: '#0A0F2C',
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
    paddingTop: 32,
    paddingBottom: 40,
    flexGrow: 1,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 40,
    width: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  placeholder: {
    color: '#D4AF37',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20,
  },
});