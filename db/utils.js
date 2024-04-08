export function cardToDb({
  id,
  question,
  answer,
  collection,
  isMastered,
  level,
  timestamp,
}) {
  return {
    _id: id,
    deck: collection,
    question,
    answer,
    isMastered,
    level,
    timestamp,
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
}) {
  return {
    id: _id,
    collection: deck,
    question,
    answer,
    isMastered,
    level: level || 1,
    timestamp: timestamp || new Date(),
  };
}

export function collectionToDb({ id, name, color, reversedDirection }) {
  return {
    _id: id,
    name,
    color,
    reversedDirection,
  };
}

export function dbToCollection({ _id, name, color, reversedDirection }) {
  return {
    id: _id,
    name,
    color,
    reversedDirection,
  };
}
