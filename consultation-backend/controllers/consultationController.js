import Consultation from "../models/Consultation.js";
import nodemailer from "nodemailer";

export const submitConsultation = async (req, res) => {
  try {
    const { fullName, emailAddress, phoneNumber, message } = req.body;

    // Validate required fields
    if (!fullName || !emailAddress) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing required fields: fullName and emailAddress are required" 
      });
    }

    // Save form submission to MongoDB
    const newConsultation = new Consultation({ 
      fullName, 
      emailAddress, 
      phoneNumber, 
      message 
    });
    await newConsultation.save();
    console.log("✅ Consultation saved to MongoDB:", newConsultation._id);

    // Send email notification using Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"True Prime Digital" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: "📩 New Consultation Request",
      text: `
New Consultation Request Received
--------------------------------
Name: ${fullName}
Email: ${emailAddress}
Phone: ${phoneNumber || "Not provided"}
Message: ${message || "No message provided"}
--------------------------------
Submitted: ${new Date().toLocaleString()}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <h2 style="color: #06142F;">📩 New Consultation Request</h2>
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${emailAddress}</p>
            <p><strong>Phone:</strong> ${phoneNumber || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9f9f9; padding: 10px; border-left: 3px solid #D4AF37;">
              ${message || "No message provided"}
            </p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
              Submitted: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully to", process.env.RECEIVER_EMAIL);

    // Respond to frontend
    res.status(200).json({ 
      success: true, 
      message: "Consultation submitted successfully!" 
    });

  } catch (error) {
    console.error("❌ Consultation error:", error);
    
    // Don't expose internal errors to client
    res.status(500).json({ 
      success: false, 
      message: "Server error, please try again later." 
    });
  }
};

