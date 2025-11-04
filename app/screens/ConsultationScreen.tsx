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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!fullName || !email || !message) {
      Alert.alert("Missing Fields", "Please fill out all required fields.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://10.0.0.142:5001/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          fullName, 
          emailAddress: email, 
          phoneNumber: phone, 
          message 
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        Alert.alert("✅ Success", data.message || "Consultation submitted successfully!");
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        Alert.alert("❌ Error", data.error || data.message || "Submission failed. Try again.");
      }
    } catch (error) {
      Alert.alert("Network Error", "Cannot reach the server. Make sure backend is running.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={["#06142F", "#0A1E48", "#0E2A66"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
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
          <Text style={styles.headerTitle}>
            Book a Free Consultation
          </Text>
          <Text style={styles.headerSubtitle}>
            Let's help your business grow online.
          </Text>

          {/* Input Fields */}
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

          {/* Submit Button */}
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

          {/* Navigation Buttons */}
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
          <Text style={styles.footer}>
            © 2025 True Prime Digital LLC
          </Text>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

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
