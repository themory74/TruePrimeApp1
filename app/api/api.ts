// ===========================================
// 🌐 TRUE PRIME DIGITAL - LIVE BACKEND CONNECTION
// ===========================================

const BASE_URL = "https://consultation-backend-oz6f.onrender.com"; // ✅ Render backend URL

export const sendConsultation = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    console.log("🚀 Sending consultation data to backend:", data);

    const response = await fetch(`${BASE_URL}/send-message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Surface HTTP errors clearly for the UI
      const text = await response.text().catch(() => "");
      throw new Error(`Backend responded with ${response.status} ${response.statusText}${text ? ` — ${text}` : ""}`);
    }

    const result = await response.json().catch(() => ({}));
    console.log("✅ API Response:", result);
    return result;
  } catch (error) {
    console.error("❌ API Error:", error);
    throw error;
  }
};
