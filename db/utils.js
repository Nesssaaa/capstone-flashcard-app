export function cardToDb(card) {
  const { id, collection, ...rest } = card;

  return {
    _id: id,
    deck: collection,
    ...rest,
  };
}

export function dbToCard(card) {
  const { _id, deck, level, timestamp, ...rest } = card;

  return {
    id: _id,
    collection: deck,
    level: level || 1,
    timestamp: timestamp || new Date(),
    ...rest,
  };
}

export function collectionToDb(collection) {
  const { id, ...rest } = collection;
  return {
    _id: id,
    ...rest,
  };
}

export function dbToCollection(collection) {
  const { _id, timestamp, ...rest } = collection;
  return {
    id: _id,
    timestamp: timestamp || new Date(),
    ...rest,
  };
}

export function dbToUser(user) {
  const { _id, ...rest } = user;
  return {
    id: _id,
    ...rest,
  };
}

export function userToDb(user) {
  const { id, ...rest } = user;

  return {
    _id: id,
    ...rest,
  };
}
