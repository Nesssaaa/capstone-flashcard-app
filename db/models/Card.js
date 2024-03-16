import mongoose from "mongoose";
import "./Deck";

const { Schema } = mongoose;

const cardSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  isMastered: { type: Boolean, required: true, default: false },
  deck: { type: Schema.Types.ObjectId, required: true, ref: "Deck" },
});

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default Card;
