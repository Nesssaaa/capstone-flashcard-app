import dbConnect from "@/db/connect.js";
import { collectionToDb, dbToCollection } from "@/db/utils";
import Deck from "@/db/models/Deck";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "DELETE") {
    await Deck.findByIdAndDelete(id);
    return response
      .status(200)
      .json({ status: `Collection ${id} successfully deleted.` });
  }
}
