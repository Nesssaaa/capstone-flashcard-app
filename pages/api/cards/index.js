import dbConnect from "@/db/connect.js";
import { cardToDb, dbToCard } from "@/db/utils";
import Card from "@/db/models/Card";
// import { seedDb } from "@/db/seed";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  if (!session?.user?.id)
    return response.status(401).json({ status: "Not logged in" });

  if (request.method === "GET") {
    let cards;
    if (session) {
      cards = await Card.find({
        user: session.user?.id,
      });
    } else {
      // TODO such cards cannot exist anymore, since user is a required field on the card object
      cards = await Card.find();
      return response.status(200).json(cards);
    }

    // TODO: Seed for correct user
    // if (cards.length === 0) {
    //   cards = await seedDb();
    // }

    return response.status(200).json(cards.map((dbCard) => dbToCard(dbCard)));
  }

  if (request.method === "POST") {
    try {
      const cardData = request.body;
      cardData.user = session.user.id;

      const newCard = await Card.create(cardToDb(cardData));

      return response.status(201).json(dbToCard(newCard));
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
