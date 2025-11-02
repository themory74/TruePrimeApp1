import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.text}>Email: info@trueprimedigital.com</Text>
      <Text style={styles.text}>Phone: (555) 555-5555</Text>
      <Text style={styles.text}>Website: www.trueprimedigital.com</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFB301',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
});