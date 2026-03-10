import mongoose from "mongoose";

// We are telling the database exactly what fields a new API will have
const apiItemSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true }, // e.g., "add-funds" (used for the URL)
  name: { type: String, required: true }, // e.g., "Add Funds API" (for the sidebar)
  status: { type: String, default: "active" }, // "active" or "soon"
  method: { type: String, default: "POST" }, // "GET", "POST", etc.
  breadcrumbs: { type: String, default: "API > NEW" },
  title: { type: String, required: true },
  description: { type: String },
  
  // These will hold the arrays for your tables
  inputData: { type: Array, default: [] },
  outputData: { type: Array, default: [] },
  errorData: { type: Array, default: [] },
  
  codeSnippet: { type: String },
  terminalType: { type: String, default: "bash" }
}, { timestamps: true });

export default mongoose.model("ApiItem", apiItemSchema);