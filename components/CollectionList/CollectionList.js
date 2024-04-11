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
          );
        })}
    </>
  );
}
