import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute, useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '../config/theme';

const {height} = Dimensions.get('window');

export default function ServiceDetailScreen() {
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const serviceTitle = route.params?.title || 'Service';
  const serviceDescription = route.params?.description || 'Service details coming soon.';

  // Fade-in animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={[COLORS.gradient.start, COLORS.gradient.end]}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.gradientBg}
      />

      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <Animated.View
            style={[
              styles.animatedContent,
              {
                opacity: fadeAnim,
              },
            ]}>
            {/* Service Title */}
            <View style={styles.header}>
              <Text style={styles.serviceTitle}>{serviceTitle}</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
              <Text style={styles.description}>{serviceDescription}</Text>
              <Text style={styles.placeholder}>
                More details coming soon...
              </Text>
            </View>

            {/* Book Consultation Button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Consultation')}
                activeOpacity={0.85}
                style={styles.consultationButton}>
                <Text style={styles.consultationButtonText}>
                  Book a Free Consultation
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
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
  animatedContent: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    paddingTop: 20,
  },
  serviceTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.gold,
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: 36,
    marginBottom: 8,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 40,
    marginBottom: 40,
  },
  description: {
    color: COLORS.lightGray,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  placeholder: {
    color: COLORS.gold,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  consultationButton: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.gold,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  consultationButtonText: {
    color: COLORS.gold,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

