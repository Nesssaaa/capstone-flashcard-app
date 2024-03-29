import dbConnect from "@/db/connect.js";
import { cardToDb, dbToCard } from "@/db/utils";
import Card from "@/db/models/Card";
import { seedDb } from "@/db/seed";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    let cards = await Card.find();

    if (cards.length === 0) {
      cards = await seedDb();
    }

    return response.status(200).json(cards.map((dbCard) => dbToCard(dbCard)));
  }

  if (request.method === "POST") {
    try {
      const newCard = await Card.create(cardToDb(request.body));

      return response.status(201).json(dbToCard(newCard));
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
