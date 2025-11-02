import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>About True Prime Digital</Text>
      <Text style={styles.text}>
        We’re a digital marketing agency focused on helping businesses grow through
        modern design, SEO, ads, and analytics.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F2C',
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    color: '#FFB301',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 15,
  },
  text: {
    color: '#F5F5F5',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});