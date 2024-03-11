import dbConnect from "@/db/connect.js";
import Card from "@/db/models/Card";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const card = await Card.findById(id);

    if (!card) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(card);
  }
}
