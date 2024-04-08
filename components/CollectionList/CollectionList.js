import CollectionContainer from "../CollectionContainer/CollectionContainer";
import { StyledListContainer } from "./CollectionList.styled";

export default function CollectionList({
  collections,
  cards,
  deleteCollection,
  isMastered,
  toggleCardDirection,
}) {
  return (
    <>
      {collections &&
        collections.map((collection) => {
          const filteredCards = cards.filter(
            (card) => card.collection === collection.id
          );
          return (
            <StyledListContainer key={collection.id}>
              <CollectionContainer
                name={collection.name}
                id={collection.id}
                color={collection.color}
                deleteCollection={deleteCollection}
                cards={filteredCards}
                isMastered={isMastered}
                toggleCardDirection={toggleCardDirection}
              />
            </StyledListContainer>
          );
        })}
    </>
  );
}
