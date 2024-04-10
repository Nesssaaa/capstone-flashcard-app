import dbConnect from "@/db/connect.js";
import { collectionToDb, dbToCollection } from "@/db/utils";
import Deck from "@/db/models/Deck";
import Card from "@/db/models/Card";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  const { id } = request.query;

  if (request.method === "GET") {
    const collectionData = await Collection.findById(id);

    if (!collectionData) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(dbToCollection(collectionData));
  }

  if (request.method === "PUT") {
    const collectionData = collectionToDb(request.body);
    await Deck.findByIdAndUpdate(id, collectionData);
    return response.status(200).json({ status: `Collection ${id} updated!` });
  }

  if (request.method === "DELETE") {
    await Deck.findByIdAndDelete(id);
    await Card.deleteMany({ deck: id });
    return response.status(200).json({
      status: `Collection ${id} including all associated cards successfully deleted.`,
    });
  }
  mutate();
}
