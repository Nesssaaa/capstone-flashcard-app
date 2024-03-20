import CollectionContainer from "../CollectionContainer/CollectionContainer";
import styled from "styled-components";

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin: 1rem;
`;

export default function CollectionList({ collections }) {
  return (
    <>
      {collections &&
        collections.map((collection) => (
          <StyledListContainer key={collection.id}>
            <CollectionContainer name={collection.name} id={collection.id} />
          </StyledListContainer>
        ))}
    </>
  );
}
