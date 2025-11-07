import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation: any = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home"); // ✅ Automatically go to Home after 3s
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={[COLORS.navy, COLORS.navy]} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/icons/trueprime_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>
          <Text style={styles.true}>TRUE </Text>
          <Text style={styles.prime}>PRIME </Text>
          <Text style={styles.digital}>DIGITAL</Text>
        </Text>
        <Text style={styles.tagline}>Digital Solutions. Prime Results.</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    letterSpacing: 1,
  },
  true: { color: "#FFB301" },
  prime: { color: "#FFB301" },
  digital: { color: "#FFB301" },
  tagline: {
    color: "#FFB301",
    fontSize: 14,
    marginTop: 10,
    opacity: 0.9,
  },
});

