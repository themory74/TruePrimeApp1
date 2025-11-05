// ==========================================
// 🚀 TRUE PRIME DIGITAL BACKEND (RENDER FINAL VERIFIED)
// ==========================================
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import SibApiV3Sdk from "sib-api-v3-sdk";
import Consultation from "./models/Consultation.js"; // ✅ MongoDB model

// -------------------------
// 🧩 Config
// -------------------------
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// -------------------------
// 🔧 Middleware
// -------------------------
app.use(cors());
app.use(express.json());

// -------------------------
// ⚙️ MongoDB Connection
// -------------------------
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// -------------------------
// 📬 Brevo (Sendinblue) Setup
// -------------------------
const brevoClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = brevoClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;
const brevoApi = new SibApiV3Sdk.TransactionalEmailsApi();

// ✅ Test Brevo connection on startup
(async () => {
  try {
    const account = await new SibApiV3Sdk.AccountApi().getAccount();
    console.log("✅ Brevo API Connected:", account.email);
  } catch (error) {
    console.error("❌ Brevo API Connection Failed:", error.message);
  }
})();

// -------------------------
// 📨 Route: Send Message + Save Consultation
// -------------------------
app.post("/send-message", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required." });
    }

    const newConsultation = new Consultation({
      fullName: name,
      emailAddress: email,
      phoneNumber: phone || "Not provided",
      message,
    });
    await newConsultation.save();
    console.log("💾 Saved consultation:", name, email);

    const sendSmtpEmail = {
      sender: { name: "True Prime Digital", email: process.env.SENDER_EMAIL },
      to: [{ email: process.env.RECEIVER_EMAIL }],
      subject: `📩 New Consultation from ${name}`,
      htmlContent: `
        <h2 style="color:#0A1E48;">New Consultation Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
        <hr />
        <p style="font-size:12px;color:#888;">Sent automatically from True Prime Digital backend</p>
      `,
    };

    await brevoApi.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Email successfully sent via Brevo API");

    res.status(200).json({ success: true, message: "✅ Message sent and saved successfully!" });
  } catch (err) {
    console.error("❌ Send/Save failed:", err.message);
    res.status(500).json({ success: false, error: "Message failed to send or save." });
  }
});

// -------------------------
// 🌍 Root Route
// -------------------------
app.get("/", (req, res) => {
  res.send("✅ True Prime Digital Backend is LIVE on Render!");
});

// -------------------------
// 🚀 Server Start
// -------------------------
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});