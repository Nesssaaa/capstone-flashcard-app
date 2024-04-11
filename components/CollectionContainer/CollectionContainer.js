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
  archive = false,
  resetCard,
  editCollection,
}) {
  function handleResetCards() {
    cards.forEach(async (card) => {
      await resetCard(card);
    });
  }

  const { color, name, id, reversedDirection } = collection;
  function toggleCardDirection() {
    editCollection({ ...collection, reversedDirection: !reversedDirection });
  }

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
          <CollectionMenu
            deleteCollection={deleteCollection}
            id={id}
            resetCards={handleResetCards}
            toggleCardDirection={toggleCardDirection}
          />
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
