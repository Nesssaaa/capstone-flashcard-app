import CollectionContainer from "../CollectionContainer/CollectionContainer";
import { StyledListContainer } from "./CollectionList.styled";

export default function CollectionList({
  collections,
  cards,
  deleteCollection,
  editCard,
  resetCard,
  archive = false,
  toggleCardDirection,
  editCollection,
}) {
  const sortedCollections = collections
    ? [...collections].sort((c1, c2) => {
        if (c1.timestamp > c2.timestamp) return -1;
        if (c1.timestamp < c2.timestamp) return 1;
        return 0;
      })
    : [];

  const collectionItems = sortedCollections.map((collection) => {
    const filteredCards = cards.filter(
      (card) => card.collection === collection.id
    );
    return { collection, filteredCards };
  });

  return (
    <>
      {collectionItems
        .filter(({ filteredCards }) => !archive || filteredCards.length > 0)
        .map(({ collection, filteredCards }) => (
          <StyledListContainer key={collection.id}>
            <CollectionContainer
              collection={collection}
              editCollection={editCollection}
              deleteCollection={deleteCollection}
              cards={filteredCards}
              archive={archive}
              editCard={editCard}
              resetCard={resetCard}
              toggleCardDirection={toggleCardDirection}
            />
          </StyledListContainer>
        ))}
    </>
  );
}
