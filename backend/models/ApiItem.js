import mongoose from "mongoose";

const apiItemSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  breadcrumbs: { type: String },
  method: { type: String, default: "POST" },
  description: { type: String },
  terminalType: { type: String, default: "JSON" },
  codeSnippet: { type: String },
  
  // These hold our beautiful table data!
  inputData: { type: Array, default: [] },
  outputData: { type: Array, default: [] },
  errorData: { type: Array, default: [] },
  
}, { timestamps: true });

export default mongoose.model("ApiItem", apiItemSchema);