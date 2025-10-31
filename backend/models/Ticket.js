import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  title: {
	type: String,
	required: true },
  description: String,
  status: {
	type: String,
	enum: ["open", "in_progress", "closed"],
	default: "open" },
  priority: {
	type: String,
	enum: ["low", "medium", "high"],
	default: "medium" },
  user: {
	type: mongoose.Schema.Types.ObjectId,
	ref: "User", required: true },
  office: {
	type: mongoose.Schema.Types.ObjectId,
	ref: "Office",
	required: true },
  assignedTo: {
	type: mongoose.Schema.Types.ObjectId,
	ref: "User" }
}, { timestamps: true });

export default mongoose.model("Ticket", ticketSchema);
