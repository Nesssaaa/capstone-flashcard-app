export function cardToDb({
  id,
  question,
  answer,
  collection,
  isMastered,
  level,
  timestamp,
  user,
}) {
  return {
    _id: id,
    deck: collection,
    question,
    answer,
    isMastered,
    level,
    timestamp,
    user,
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
  };
}

// TODO: add user to card and collection, otherwise data will be lost

export function collectionToDb({ id, name, color, user }) {
  return {
    _id: id,
    name,
    color,
    user,
  };
}

export function dbToCollection({ _id, name, color, user }) {
  return {
    id: _id,
    name,
    color,
    user,
    URLSearchParams,
  };
}

export function dbToUser({ _id, name }) {
  return {
    id: _id,
    name,
  };
}
