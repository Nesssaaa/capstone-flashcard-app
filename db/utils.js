export function cardToDb(card) {
  const { id, collection, ...rest } = card;

  return {
    _id: id,
    deck: collection,
    ...rest,
  };
}

export function dbToCard({
  _id,
  question,
  answer,
  deck,
  isMastered,
  level,
  timestamp,
  user,
  languageQuestion,
  languageAnswer,
}) {
  return {
    id: _id,
    collection: deck,
    question,
    answer,
    isMastered,
    level: level || 1,
    timestamp: timestamp || new Date(),
    user,
    languageQuestion,
    languageAnswer,
  };
}

export function collectionToDb(collection) {
  const { id, ...rest } = collection;
  return {
    _id: id,
    ...rest,
  };
}

export function dbToCollection({
  _id,
  name,
  color,
  user,
  reversedDirection,
  timestamp,
}) {
  return {
    id: _id,
    name,
    color,
    user,
    reversedDirection,
    timestamp: timestamp || new Date(),
  };
}

export function dbToUser({ _id, name }) {
  return {
    id: _id,
    name,
  };
}

export function userToDb({ id, name }) {
  return {
    _id: id,
    name,
  };
}
