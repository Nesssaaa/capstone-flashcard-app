import { useState } from "react";
import useCount from "@/components/quizPositionCounter.js";
import { getRandomCards } from "@/utils.js";
import CardContainer from "@/components/CardContainer/CardContainer.js";
import { useRouter } from "next/router";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import {
  StyledCollectionName,
  StyledLink,
  StyledContainer,
  StyledSection,
  StyledButton,
  StyledButtonNavBar,
  IconWrapper,
} from "@/components/QuizPage.styled.js";

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
  console.log(countPosition, quizCards);

  const card = quizCards[countPosition];
  const collectionName = collection ? collection.name : "lädt gerade...";

  return (
    <StyledContainer>
      <StyledCollectionName>{collectionName}</StyledCollectionName>
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
          {countPosition > 0 && (
            <StyledButton onClick={decrement}>
              {" "}
              <IconWrapper>
                <FaArrowCircleLeft />
              </IconWrapper>
            </StyledButton>
          )}
          {countPosition < quizCards.length - 1 && (
            <StyledButton onClick={increment}>
              {" "}
              <IconWrapper>
                <FaArrowCircleRight />
              </IconWrapper>
            </StyledButton>
          )}
        </StyledButtonNavBar>
        <StyledLink href={`/collections/${collection.id}`}>
          zurück zur Übersicht
        </StyledLink>
      </StyledSection>
    </StyledContainer>
  );
}
