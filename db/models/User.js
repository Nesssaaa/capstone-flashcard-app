import mongoose from "mongoose";
import "./Deck";
import "./Card";

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true, // Eindeutige Google-ID für jeden Benutzer
  },
  username: {
    type: String,
    required: false, // Du könntest den Benutzernamen optional machen
  },
  email: {
    type: String,
    required: true,
    unique: true, // Eindeutige E-Mail-Adresse für jeden Benutzer
  },
  deck: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Deck",
  },
  card: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Card",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
