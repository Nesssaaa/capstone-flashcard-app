export function cardToDb({ id, question, answer, collection }) {
  return {
    _id: id,
    deck: collection,
    question,
    answer,
  };
}

export function dbToCard({ _id, question, answer, deck }) {
  return {
    id: _id,
    collection: deck,
    question,
    answer,
  };
}
