import CollectionContainer from "../CollectionContainer/CollectionContainer";
import styled from "styled-components";

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin: 1rem;
`;

export default function CollectionList({
  collections,
  cards,
  deleteCollection,
}) {
  return (
    <>
      {collections &&
        collections.map((collection) => {
          const filteredCards = cards.filter(
            (card) => card.collection === collection.id
          );
          return (
            <div key={collection.id}>
              <CollectionContainer
                name={collection.name}
                id={collection.id}
                deleteCollection={deleteCollection}
                cards={filteredCards}
              />
            </div>
          );
        })}
    </>
  );
}
