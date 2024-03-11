import mongoose from "mongoose";

const { Schema } = mongoose;

const cardSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  isMastered: { type: Boolean, required: true, default: false },
  collection: { type: String, required: true },
});

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default Card;
