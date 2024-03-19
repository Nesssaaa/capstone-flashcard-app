import dbConnect from "@/db/connect.js";
import { collectionToDb, dbToCollection } from "@/db/utils";
import Deck from "@/db/models/Deck";
import Card from "@/db/models/Card";

// export default async function handler(request, response) {
//   await dbConnect();
//   const { id } = request.query;

//   if (request.method === "DELETE") {
//     const deleteDeck = await Deck.findByIdAndDelete(id);
//     await Card.deleteMany({ decks: id });
//     await Deck.findByIdAndDelete(id);
//     return response.status(200).json({
//       status: `Collection ${id} including all associatedcards successfully deleted.`,
//     });
//   }
// }

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "DELETE") {
    await Deck.findByIdAndDelete(id);
    await Card.deleteMany({ deck: id });

    return response.status(200).json({
      status: `Collection ${id} including all associated cards successfully deleted.`,
    });
  }
  mutate();
}
