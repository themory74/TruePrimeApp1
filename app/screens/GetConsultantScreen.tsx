import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function GetConsultantScreen() {
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
      Linking.openURL(fallbackUrl).catch(() => {});
    }
  };

  return (
    <View style={styles.root}>
      {/* Full-screen gradient background */}
      <LinearGradient
        colors={['#050B1E', '#0A0F2C']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.gradientBg}
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title}>Book a Free Consultation</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>Let's help your business grow online.</Text>

          {/* CTA Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                safeNavigate('Contact', 'https://trueprimedigital.com/#contact')
              }
              style={styles.primaryWrap}>
              <LinearGradient
                colors={['#0077FF', '#3BA7FF']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.primaryBtn}>
                <Text style={styles.primaryTxt}>CONTACT US</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                safeNavigate('Services', 'https://trueprimedigital.com/#services')
              }
              style={styles.secondaryBtn}>
              <Text style={styles.secondaryTxt}>VIEW SERVICES</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footerWrap}>
            <Text style={styles.footer}>© 2025 True Prime Digital LLC</Text>
          </View>
        </View>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 0.8,
    textAlign: 'center',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 60,
    color: '#EAEAEA',
    letterSpacing: 0.5,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
    marginBottom: 60,
  },
  primaryWrap: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 4},
    elevation: 8,
  },
  primaryBtn: {
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryTxt: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1,
  },
  secondaryBtn: {
    width: '100%',
    maxWidth: 340,
    borderWidth: 2,
    borderColor: '#D4AF37',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  secondaryTxt: {
    color: '#D4AF37',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  footerWrap: {
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    color: '#666B78',
    fontSize: 12,
    textAlign: 'center',
  },
});

