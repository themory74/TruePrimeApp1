// DO NOT mount decorative global overlays here. Keep screen-level visuals inside each screen.
import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}