// ===============================================
// ✅ api.ts — Centralized API helper for TruePrimeApp1
// ===============================================

const BASE_URL = "https://consultation-backend-oz6l.onrender.com";

interface ConsultationData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ConsultationResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Send consultation message to backend
export async function sendConsultation(data: ConsultationData): Promise<ConsultationResponse> {
  try {
    const response = await fetch(`${BASE_URL}/send-message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("✅ Consultation sent successfully:", result);
    return result;
  } catch (error) {
    console.error("❌ Consultation submission failed:", error);
    throw error;
  }
}

