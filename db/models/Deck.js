import mongoose from "mongoose";

const { Schema } = mongoose;

const deckSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true, default: "#d56f21ff" },
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  reversedDirection: { type: Boolean, required: true, default: false },
  timestamp: { type: Date, required: true, default: Date.now },
});

const Deck = mongoose.models.Deck || mongoose.model("Deck", deckSchema);

export default Deck;
