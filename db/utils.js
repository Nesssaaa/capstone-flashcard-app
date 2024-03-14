export function cardToDb({ id, question, answer, collection, isMastered }) {
  return {
    _id: id,
    deck: collection,
    question,
    answer,
    isMastered,
  };
}

export function dbToCard({ _id, question, answer, deck, isMastered }) {
  return {
    id: _id,
    collection: deck,
    question,
    answer,
    isMastered,
  };
}