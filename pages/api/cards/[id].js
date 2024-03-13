import dbConnect from "@/db/connect.js";
import Card from "@/db/models/Card";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const cardData = await Card.findById(id);

    if (!cardData) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(cardData);
  }

  if (request.method === "PUT") {
    const cardData = request.body;
    await Card.findByIdAndUpdate(id, cardData);
    return response.status(200).json({ status: `Card ${id} updated!` });
  }

  if (request.method === "DELETE") {
    await Card.findByIdAndDelete(id);
    return response
      .status(200)
      .json({ status: `Card ${id} successfully deleted.` });
  }
}
