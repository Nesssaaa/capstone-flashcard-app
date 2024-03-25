import { useState } from "react";
import useCount from "@/components/quizPositionCounter.js";
import { getRandomCards } from "@/utils.js";
import CardContainer from "@/components/CardContainer/CardContainer.js";
import { useRouter } from "next/router";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import {
  StyledLink,
  StyledContainer,
  StyledSection,
  StyledButton,
  StyledButtonNavBar,
  IconWrapper,
} from "@/components/QuizPage.styled.js";
import CollectionHeader from "@/components/CollectionHeader/CollectionHeader.js";
import { StyledHeadlines } from "@/components/Headline.styled";
import { Space } from "@/components/CollectionNavBar/CollectionNavBar.styled";
export default function QuizPage({
  cards,
  getCollection,
  onToggle,
  deleteCard,
}) {
  const router = useRouter();
  const collection = getCollection(router.query.id);
  const filteredCards = collection
    ? cards
        .filter((card) => card.collection === collection.id)
        .filter((card) => card.isMastered === false)
    : [];

  const [quizCards, setQuizCards] = useState(getRandomCards(filteredCards, 15));
  const { countPosition, increment, decrement } = useCount(0);

  const card = quizCards[countPosition];
  const collectionName = collection ? collection.name : "lädt gerade...";

  return (
    <StyledContainer>
      <CollectionHeader name={collectionName} />
      <CardContainer
        question={card.question}
        answer={card.answer}
        id={card.id}
        deleteCard={deleteCard}
        onToggle={onToggle}
        isMastered={card.isMastered}
      ></CardContainer>

      <StyledSection>
        Fortschritt: {countPosition + 1} von {quizCards.length}
        <br />
        <StyledButtonNavBar>
          <StyledButton onClick={decrement} $hidden={countPosition === 0}>
            <IconWrapper>
              <FaArrowCircleLeft />
            </IconWrapper>
          </StyledButton>
          <StyledButton
            onClick={increment}
            $hidden={countPosition === quizCards.length - 1}
          >
            <IconWrapper>
              <FaArrowCircleRight />
            </IconWrapper>
          </StyledButton>
        </StyledButtonNavBar>
        <StyledLink href={`/collections/${collection.id}`}>
          zurück zur Übersicht
        </StyledLink>
        <Space />
      </StyledSection>
    </StyledContainer>
  );
}
