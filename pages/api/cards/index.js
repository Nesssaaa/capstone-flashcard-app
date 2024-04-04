import dbConnect from "@/db/connect.js";
import { cardToDb, dbToCard } from "@/db/utils";
import Card from "@/db/models/Card";
import { seedDb } from "@/db/seed";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  if (request.method === "GET") {
    if (session) {
      const cards = await Card.find({
        user: session.user?.name,
      });
    } else {
      const cards = await Card.find();
      return response.status(200).json(cards);
    }

    if (cards.length === 0) {
      cards = await seedDb();
    }

    return response.status(200).json(cards.map((dbCard) => dbToCard(dbCard)));
  }

  if (request.method === "POST") {
    try {
      const newCard = await Card.create(cardToDb(request.body));
      const card = new Card({ ...newCard, user: session.user?.name });

      return response.status(201).json(dbToCard(newCard));
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
