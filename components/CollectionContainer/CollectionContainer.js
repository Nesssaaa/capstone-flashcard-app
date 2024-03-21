import { FaRegPlayCircle } from "react-icons/fa";
import Link from "next/link";
import {
  StyledCollectionContainer,
  StyledColorContainer,
  StyledTextContainer,
  CollectionLink,
  StyledCollectionName,
  StyledWrapper,
  StyledCounter,
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
            <StyledWrapper>
              <StyledCollectionName>{name}</StyledCollectionName>

              <StyledCounter>{cards.length}</StyledCounter>
            </StyledWrapper>
          </CollectionLink>
        </StyledTextContainer>
      </StyledCollectionContainer>
    </>
  );
}
