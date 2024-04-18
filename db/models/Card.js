import mongoose from "mongoose";
import "./Deck";

const { Schema } = mongoose;

const cardSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  isMastered: { type: Boolean, required: true, default: false },
  deck: { type: Schema.Types.ObjectId, required: true, ref: "Deck" },
  level: { type: Number, required: true, default: 1 },
  timestamp: { type: Date, required: true, default: Date.now },
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default Card;
