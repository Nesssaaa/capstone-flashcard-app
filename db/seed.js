//TODO: we are testing, if this function is still usefull

// import Card from "@/db/models/Card";
// import Deck from "@/db/models/Deck";
// import initialCards from "../lib.data.json";
// import initialCollections from "../lib.collections.json";
// import { cardToDb, collectionToDb } from "./utils";

// export async function seedDb() {
//   let cards = await Card.find();
//   if (cards.length > 0) return cards;

//   for (const card of initialCards) {
//     await Card.create(cardToDb(card));
//   }

//   const decks = await Deck.find();

//   if (decks.length === 0) {
//     for (const deck of initialCollections) {
//       await Deck.create(collectionToDb(deck));
//     }
//   }

//   return initialCards;
// }
