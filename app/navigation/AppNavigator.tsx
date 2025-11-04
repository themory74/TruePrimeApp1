import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ServiceDetailScreen from '../screens/ServiceDetailScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';
import ConsultationScreen from '../screens/ConsultationScreen';
import SettingsScreen from '../screens/SettingsScreen';
// Service Screens
import WebAppScreen from '../screens/WebAppScreen';
import SEOLocalScreen from '../screens/SEOLocalScreen';
import GoogleAdsScreen from '../screens/GoogleAdsScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import StrategyScreen from '../screens/StrategyScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

// DO NOT mount decorative global overlays here. Keep screen-level visuals inside each screen.
export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // Global header style for True Prime Digital brand
            headerStyle: {
              backgroundColor: '#0A0F2C', // Deep navy base
            },
            headerTintColor: '#FFFFFF', // White icons and back arrow
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '700',
              color: '#FFFFFF',
            },
            headerShadowVisible: false,
            headerBackTitle: '', // Hide back button title
            // Smooth transitions
            animation: 'slide_from_right',
            presentation: 'card',
          }}>
          {/* Home screen - custom header (no navigation header) */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          
          {/* All other screens use the premium True Prime Digital header */}
          <Stack.Screen
            name="Services"
            component={ServicesScreen}
            options={{
              title: 'Our Services',
            }}
          />
          <Stack.Screen
            name="ServiceDetail"
            component={ServiceDetailScreen}
            options={({route}: any) => ({
              title: route.params?.title || 'Service Details',
            })}
          />
          <Stack.Screen
            name="Contact"
            component={ContactScreen}
            options={{
              title: 'Contact Us',
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{
              title: 'About Us',
            }}
          />
          <Stack.Screen
            name="Consultation"
            component={ConsultationScreen}
            options={{
              title: 'Book Consultation',
              headerStyle: {
                backgroundColor: '#06142F',
              },
              headerTintColor: '#FFFFFF',
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: 'Settings',
            }}
          />
          
          {/* Service Screens */}
          <Stack.Screen
            name="WebApp"
            component={WebAppScreen}
            options={{
              title: 'Web Design & App Development',
            }}
          />
          <Stack.Screen
            name="SEOLocal"
            component={SEOLocalScreen}
            options={{
              title: 'SEO / Local SEO',
            }}
          />
          <Stack.Screen
            name="GoogleAds"
            component={GoogleAdsScreen}
            options={{
              title: 'Google Ads / PPC',
            }}
          />
          <Stack.Screen
            name="Analytics"
            component={AnalyticsScreen}
            options={{
              title: 'Analytics, CRO & Automation',
            }}
          />
          <Stack.Screen
            name="Strategy"
            component={StrategyScreen}
            options={{
              title: 'Consulting & Strategy',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}