import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function ConsultationScreen() {
  const navigation: any = useNavigation();

  // ✅ Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Backend URL
  const API_URL =
    Platform.OS === "android"
      ? "http://10.0.0.142:5001"
      : "http://localhost:5001";

  // ✅ Submit form
  const handleSubmit = async () => {
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      Alert.alert("Missing Fields", "Please fill out all required fields.");
      return;
    }

    try {
      setLoading(true);
      console.log("🔗 Connecting to backend...", `${API_URL}/send-message`);

      // ✅ Send clean structured data
      const response = await fetch(`${API_URL}/send-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim() || "Not provided",
          message: message.trim(),
        }),
      });

      const data = await response.json();
      console.log("📥 Backend response:", data);

      if (response.ok && data.success) {
        Alert.alert("✅ Success", data.message || "Your consultation request has been sent!");
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        throw new Error(data.error || "Message failed to send.");
      }
    } catch (error: any) {
      console.error("❌ Send failed:", error);
      const msg =
        error.message?.includes("Network request failed") ||
        error.message?.includes("Failed to fetch")
          ? "Cannot connect to backend. Please ensure the server is running."
          : error.message || "Something went wrong. Please try again.";
      Alert.alert("❌ Error", msg);
    } finally {
      setLoading(false);
    }
  };

  // ✅ UI Layout
  return (
    <LinearGradient colors={["#06142F", "#0A1E48", "#0E2A66"]} style={{ flex: 1 }}>
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              padding: 24,
              paddingTop: 20,
              justifyContent: "center",
            }}
          >
            {/* Header */}
            <Text style={styles.headerTitle}>Book a Free Consultation</Text>
            <Text style={styles.headerSubtitle}>
              Let's help your business grow online.
            </Text>

            {/* Inputs */}
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#A0B8D0"
              value={fullName}
              onChangeText={setFullName}
              style={styles.input}
              editable={!loading}
            />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#A0B8D0"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              editable={!loading}
            />
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#A0B8D0"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              style={styles.input}
              editable={!loading}
            />
            <TextInput
              placeholder="Your Message"
              placeholderTextColor="#A0B8D0"
              multiline
              numberOfLines={4}
              value={message}
              onChangeText={setMessage}
              style={[styles.input, { height: 120, textAlignVertical: "top" }]}
              editable={!loading}
            />

            {/* Submit */}
            <TouchableOpacity
              onPress={handleSubmit}
              activeOpacity={0.85}
              style={[styles.submitBtn, loading && styles.submitBtnDisabled]}
              disabled={loading}
            >
              <Text style={styles.submitText}>
                {loading ? "Submitting..." : "Submit Consultation"}
              </Text>
            </TouchableOpacity>

            {/* Navigation */}
            <TouchableOpacity
              style={styles.outlineBtn}
              onPress={() => navigation.navigate("Services")}
            >
              <Text style={styles.outlineText}>View Services</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.outlineBtn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.outlineText}>Back to Home</Text>
            </TouchableOpacity>

            {/* Footer */}
            <Text style={styles.footer}>© 2025 True Prime Digital LLC</Text>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

// ✅ True Prime Digital styling
const styles = StyleSheet.create({
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#FFFFFF",
    marginBottom: 18,
    fontSize: 15,
  },
  submitBtn: {
    backgroundColor: "#D4AF37",
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  submitText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: "#D4AF37",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 14,
  },
  outlineText: {
    color: "#D4AF37",
    fontWeight: "700",
    fontSize: 15,
    textAlign: "center",
  },
  footer: {
    color: "rgba(255,255,255,0.5)",
    textAlign: "center",
    marginTop: 30,
    fontSize: 12,
  },
  submitBtnDisabled: {
    opacity: 0.6,
  },
});