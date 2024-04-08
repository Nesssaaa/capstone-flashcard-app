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
  collection,
  cards,
  deleteCollection,
  isMastered,
  editCollection,
}) {
  const { color, name, id, reversedDirection } = collection;
  function toggleCardDirection() {
    editCollection({ ...collection, reversedDirection: !reversedDirection });
  }
  console.log(collection);
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
