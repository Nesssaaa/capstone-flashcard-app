import Card from "@/db/models/Card";
import Deck from "@/db/models/Deck";
import initialCards from "../lib.data.json";
import initialCollections from "../lib.collections.json";
import { cardToDb, collectionToDb } from "./utils";
import { Types } from "mongoose";

export async function seedDb(userId) {
  let cards = await Card.find({
    user: userId,
  });
  let decks = await Deck.find({
    user: userId,
  });

  if (cards.length == 0 && decks.length == 0) {
    const userDecks = initialCollections
      .map((initialCollection) => ({
        ...initialCollection,
        id: new Types.ObjectId(),
        user: userId,
      }))
      .map(collectionToDb);

    const userCards = initialCards
      .map((initialCard) => ({
        ...initialCard,
        user: userId,
        id: new Types.ObjectId(),
        collection:
          userDecks[
            initialCollections.findIndex(
              (collection) => collection.id == initialCard.collection
            )
          ]._id,
      }))
      .map(cardToDb);

    for (const card of userCards) {
      await Card.create(card);
    }

    for (const deck of userDecks) {
      await Deck.create(deck);
    }

    return { cards: userCards, decks: userDecks };
  }

  return { cards, decks };
}
