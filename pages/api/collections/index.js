import dbConnect from "@/db/connect.js";
import { collectionToDb, dbToCollection } from "@/db/utils";
import Deck from "@/db/models/Deck";
import { seedDb } from "@/db/seed";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    let collections = await Deck.find();

    return response
      .status(200)
      .json(collections.map((dbCollection) => dbToCollection(dbCollection)));
  }

  if (request.method === "POST") {
    try {
      const newCollection = await Deck.create(collectionToDb(request.body));

      return response.status(201).json(dbToCollection(newCollection));
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "DELETE") {
    await Deck.findByIdAndDelete(id);
    return response
      .status(200)
      .json({ status: `Collection ${id} successfully deleted.` });
  }
}
