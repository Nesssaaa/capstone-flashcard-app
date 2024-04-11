import dbConnect from "@/db/connect.js";
import { cardToDb, dbToCard } from "@/db/utils";
import Card from "@/db/models/Card";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  const { id } = request.query;

  if (request.method === "GET") {
    const cardData = await Card.findById(id);

    if (!cardData) {
      return response.status(404).json({ status: "Not Found" });
    }
    if (cardData.user !== session.user.id) {
      return response.status(403).json({ status: "Wrong user" });
    }
    response.status(200).json(dbToCard(cardData));
  }

  if (request.method === "PUT") {
    const cardData = cardToDb(request.body);

    if (cardData.user !== session.user.id) {
      return response.status(403).json({ status: "Wrong user" });
    }

    await Card.findByIdAndUpdate(id, cardData);
    return response.status(200).json({ status: `Card ${id} updated!` });
  }

  if (request.method === "DELETE") {
    // TODO: Only delete card if user matches
    await Card.findByIdAndDelete(id);
    return response
      .status(200)
      .json({ status: `Card ${id} successfully deleted.` });
  }
}
