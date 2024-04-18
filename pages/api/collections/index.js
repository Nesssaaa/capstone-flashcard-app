import dbConnect from "@/db/connect.js";
import { collectionToDb, dbToCollection } from "@/db/utils";
import Deck from "@/db/models/Deck";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../auth/[...nextauth]";
import { seedDb } from "@/db/seed";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  if (!session?.user?.id) {
    return response.status(401).json({
      status: "Anmeldung erforderlich",
      message: "Bitte melde dich an.",
    });
  }

  if (request.method === "GET") {
    let collections = await Deck.find({
      user: session.user.id,
    });

    if (collections.length === 0) {
      const seeded = await seedDb(session.user.id);
      collections = seeded.decks;
    }

    return response
      .status(200)
      .json(collections.map((dbCollection) => dbToCollection(dbCollection)));
  }

  if (request.method === "POST") {
    try {
      const data = collectionToDb(request.body);
      data.user = session.user.id;

      const newCollection = await Deck.create(data);
      return response.status(201).json(dbToCollection(newCollection));
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
