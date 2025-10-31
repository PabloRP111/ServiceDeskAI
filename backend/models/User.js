import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: { 
    type: String,
      enum: ["admin", "agent", "user"],
      default: "user" },
  office: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Office" }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
