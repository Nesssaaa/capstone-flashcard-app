import {
  StyledCollectionContainer,
  StyledColorContainer,
  StyledTextContainer,
  CollectionLink,
  StyledCollectionName,
  StyledWrapper,
  StyledCounter,
  IconWrapper,
  StyledLink,
} from "./CollectionContainer.styled";
import { MdQuiz } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import CollectionMenu from "../CollectionMenu/CollectionMenu";

export default function CollectionContainer({
  name,
  id,
  color,
  cards,
  deleteCollection,
  archive = false,
}) {
  return (
    <StyledCollectionContainer>
      <StyledColorContainer $color={color}>
        {!archive ? (
          <StyledLink href={`/collections/${id}/quiz`}>
            <IconWrapper>
              <MdQuiz />
            </IconWrapper>
          </StyledLink>
        ) : (
          <IconWrapper>
            <StyledLink href={`/collections/${id}?archive=${archive}`}>
              <FaCheck />
            </StyledLink>
          </IconWrapper>
        )}
      </StyledColorContainer>

      <StyledTextContainer $noCards={!cards}>
        {cards && (
          <CollectionMenu deleteCollection={deleteCollection} id={id} />
        )}
        <CollectionLink href={`/collections/${id}?archive=${archive}`}>
          <StyledWrapper>
            <StyledCollectionName>{name}</StyledCollectionName>

            {cards && <StyledCounter>{cards.length}</StyledCounter>}
          </StyledWrapper>
        </CollectionLink>
      </StyledTextContainer>
    </StyledCollectionContainer>
  );
}
