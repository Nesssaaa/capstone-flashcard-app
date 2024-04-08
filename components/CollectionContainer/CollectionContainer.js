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
import { useState } from "react";

export default function CollectionContainer({
  name,
  id,
  color,
  cards,
  deleteCollection,
  isMastered,
}) {
  const [hidden, setHidden] = useState(false);
  function toggleCardDirection() {
    setHidden(!hidden);
  }
  return (
    <StyledCollectionContainer>
      <StyledColorContainer $color={color}>
        {!isMastered ? (
          <StyledLink href={`/collections/${id}/quiz`}>
            <IconWrapper>
              <MdQuiz />
            </IconWrapper>
          </StyledLink>
        ) : (
          <IconWrapper>
            <StyledLink href={`/collections/${id}?ismastered=${isMastered}`}>
              <FaCheck />
            </StyledLink>
          </IconWrapper>
        )}
      </StyledColorContainer>

      <StyledTextContainer $noCards={!cards}>
        {cards && (
          <CollectionMenu
            deleteCollection={deleteCollection}
            id={id}
            toggleCardDirection={toggleCardDirection}
          />
        )}
        <CollectionLink href={`/collections/${id}?ismastered=${isMastered}`}>
          <StyledWrapper>
            <StyledCollectionName>{name}</StyledCollectionName>

            {cards && <StyledCounter>{cards.length}</StyledCounter>}
          </StyledWrapper>
        </CollectionLink>
      </StyledTextContainer>
    </StyledCollectionContainer>
  );
}
