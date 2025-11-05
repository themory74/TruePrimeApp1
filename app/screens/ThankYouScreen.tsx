import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function ThankYouScreen() {
  const navigation: any = useNavigation();

  return (
    <LinearGradient colors={["#06142F", "#0A1E48", "#0E2A66"]} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>🎉 Thank You!</Text>
          <Text style={styles.message}>
            Your consultation request has been successfully sent.{"\n"}
            Our team will contact you soon.
          </Text>

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.primaryText}>Back to Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate("Services")}
          >
            <Text style={styles.secondaryText}>View Our Services</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>© 2025 True Prime Digital LLC</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 12,
  },
  message: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  primaryBtn: {
    backgroundColor: "#D4AF37",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  primaryText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: "#D4AF37",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 30,
  },
  secondaryText: {
    color: "#D4AF37",
    fontWeight: "700",
    fontSize: 16,
  },
  footer: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10,
  },
});

