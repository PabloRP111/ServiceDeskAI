import mongoose from "mongoose";

const officeSchema = new mongoose.Schema({
  name: { 
	type: String,
	required: true },
  location: String,
  code: { type: String,
	unique: true }
}, { timestamps: true });

export default mongoose.model("Office", officeSchema);
