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
  IconWrapperArchiv,
} from "./CollectionContainer.styled";
import { MdQuiz } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import CollectionMenu from "../CollectionMenu/CollectionMenu";

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
          <StyledLink
            aria-label="Hiermit startest du dein Quiz"
            href={`/collections/${id}/quiz`}
          >
            <IconWrapper>
              <MdQuiz />
            </IconWrapper>
          </StyledLink>
        ) : (
          <IconWrapper>
            <StyledLink
              aria-label="Weiterleitung zum Archiv"
              href={`/collections/${id}?archive=${archive}`}
            >
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
        {/* <StyledWrapper> */}
        <CollectionLink
          aria-label="Weiterleitung zum Archiv"
          href={`/collections/${id}?archive=${archive}`}
        >
          <StyledWrapper>
            <StyledCollectionName>{name}</StyledCollectionName>

            {cards && <StyledCounter>{cards.length}</StyledCounter>}
          </StyledWrapper>
        </CollectionLink>
        {/* </StyledWrapper> */}
      </StyledTextContainer>
    </StyledCollectionContainer>
  );
}
