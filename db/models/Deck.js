import mongoose from "mongoose";

const { Schema } = mongoose;

const deckSchema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.models.Deck || mongoose.model("Deck", deckSchema);
