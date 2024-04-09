import dbConnect from "@/db/connect.js";
import { collectionToDb, dbToCollection } from "@/db/utils";
import Deck from "@/db/models/Deck";
import User from "@/db/models/User";
import { getServerSession } from "next-auth/next";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response);

  if (!session) {
    return response.status(401).json({
      status: "Anmeldung erforderlich",
      message: "Bitte melde dich an.",
    });
  }
  const { id } = request.query;

  if (request.method === "GET") {
    // Eleganter wäre es den Nutzer direkt aus der Session zu holen, allerdings steht dort aktuell nur der Name drin (NextAuth!?)
    let user = await User.findOne({ name: session.user?.name });

    let collections = await Deck.find({
      user: user?.id,
    });

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
