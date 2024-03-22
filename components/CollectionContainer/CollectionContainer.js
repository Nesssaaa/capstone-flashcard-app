import {
  StyledCollectionContainer,
  StyledColorContainer,
  StyledTextContainer,
  CollectionLink,
} from "./CollectionContainer.styled";

import CollectionMenu from "../CollectionMenu/CollectionMenu";

export default function CollectionContainer({
  name,
  id,
  color,
  deleteCollection,
}) {
  return (
    <>
      <StyledCollectionContainer>
        <StyledColorContainer $color={color} />
        <StyledTextContainer>
          <CollectionMenu deleteCollection={deleteCollection} id={id} />
          <CollectionLink href={`/collections/${id}`}>
            <h3>{name}</h3>
          </CollectionLink>
        </StyledTextContainer>
      </StyledCollectionContainer>
    </>
  );
}
