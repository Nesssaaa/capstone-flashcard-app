import mongoose from "mongoose";

const { Schema } = mongoose;

const deckSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true, default: "#d56f21ff" },
});

export default mongoose.models.Deck || mongoose.model("Deck", deckSchema);
