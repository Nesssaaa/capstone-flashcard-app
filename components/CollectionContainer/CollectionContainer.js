import {
  StyledCollectionContainer,
  StyledColorContainer,
  StyledTextContainer,
  IconWrapper,
  CollectionLink,
  StyledCollectionName,
} from "./CollectionContainer.styled";

import CollectionMenu from "../CollectionMenu/CollectionMenu";

export default function CollectionContainer({
  name,
  id,
  deleteCollection,
  cards,
}) {
  return (
    <>
      <StyledCollectionContainer>
        <StyledColorContainer />
        <StyledTextContainer>
          <CollectionMenu deleteCollection={deleteCollection} id={id} />
          <CollectionLink href={`/collections/${id}`}>
            <StyledCollectionName>{name}</StyledCollectionName>
          </CollectionLink>
          <StyledCollectionName>{cards.length}</StyledCollectionName>
        </StyledTextContainer>
      </StyledCollectionContainer>
    </>
  );
}
