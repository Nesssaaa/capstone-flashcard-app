import dbConnect from "@/db/connect.js";
import Card from "@/db/models/Card";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const cards = await Card.find();
    return response.status(200).json(cards);
  }
}
