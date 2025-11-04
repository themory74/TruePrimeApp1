import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  phoneNumber: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Consultation = mongoose.model("Consultation", consultationSchema);
export default Consultation;

