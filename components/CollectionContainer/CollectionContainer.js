import {
  StyledCollectionContainer,
  StyledColorContainer,
  StyledTextContainer,
  CollectionLink,
} from "./CollectionContainer.styled";

export default function CollectionContainer({ name, id }) {
  return (
    <>
      <StyledCollectionContainer>
        <StyledColorContainer />
        <CollectionLink href={`/collections/${id}`}>
          <StyledTextContainer>
            <h3>{name}</h3>
          </StyledTextContainer>
        </CollectionLink>
      </StyledCollectionContainer>
    </>
  );
}
