import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Our Services</Text>
        <Text style={styles.text}>
          • SEO Optimization{'\n'}
          • Google Ads (PPC){'\n'}
          • Web Design & Development{'\n'}
          • Social Media Marketing{'\n'}
          • Analytics & Data Tracking{'\n'}
          • Email Automation
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F2C',
  },
  scroll: {
    padding: 25,
  },
  title: {
    fontSize: 28,
    color: '#FFB301',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#F5F5F5',
    fontSize: 16,
    lineHeight: 26,
  },
});