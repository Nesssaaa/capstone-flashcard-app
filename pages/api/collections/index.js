import dbConnect from "@/db/connect.js";
import { collectionToDb, dbToCollection } from "@/db/utils";
import Deck from "@/db/models/Deck";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { Collection } from "mongoose";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    return response.status(401).json({
      status: "Anmeldung erforderlich",
      message: "Bitte melde dich an.",
    });
  }
  const { id } = request.query;

  if (request.method === "GET") {
    let collections = await Deck.find({
      user: session.user?.name,
    });

    return response
      .status(200)
      .json(collections.map((dbCollection) => dbToCollection(dbCollection)));
  }

  if (request.method === "POST") {
    try {
      const newCollection = await Deck.create(collectionToDb(request.body));
      const collection = new Collection({
        ...newCollection,
        user: session.user?.name,
      });

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
