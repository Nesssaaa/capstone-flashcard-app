import { useState } from "react";
import useCount from "@/components/quizPositionCounter.js";
import { getRandomCards } from "@/utils.js";
import CardContainer from "@/components/CardContainer/CardContainer.js";
import { useRouter } from "next/router";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { PiSmileyDuotone, PiSmileySadDuotone } from "react-icons/pi";
import {
  StyledLink,
  StyledContainer,
  StyledSection,
  StyledNavButton,
  StyledButtonNavBar,
  IconWrapper,
  StyledQuizButtonRight,
  StyledQuizButtonWrong,
} from "@/components/QuizPage.styled.js";
import CollectionHeader from "@/components/CollectionHeader/CollectionHeader.js";
import { toast } from "react-toastify";
import { Space } from "@/components/Navigation/Navigation.styled";

export default function QuizPage({
  cards,
  getCollection,
  onToggle,
  deleteCard,
  updateCard,
  resetCard,
  isFlipped,
  setIsFlipped,
}) {
  const router = useRouter();
  const collection = getCollection(router.query.id);
  const filteredCards = collection
    ? cards
        .filter((card) => card.collection === collection.id)
        .filter((card) => card.isMastered === false)
        .sort((card1, card2) => {
          if (card1.level < card2.level) return -1;
          if (card1.level > card2.level) return 1;
          if (card1.timestamp < card2.timestamp) return -1;
          if (card1.timestamp > card2.timestamp) return 1;
          return 0;
        })
        .slice(0, 15)
    : [];

  // Note:  We store a SNAPSHOT of the cards as they were at the beginning of the quiz in the state.
  // Even if the cards are updated in the database through the calls of updateCard, the card's
  // state in this quiz page remains the state of the card at the beginning of the quiz.
  // This is intentional, such that the user can, for example, go back to the previous card
  // and see the same state as before answering the card and can, e.g., correct a mis-click (right or wrong).
  // The cards are only refreshed when the page is reloaded or a new quiz is started.

  const [quizCards, setQuizCards] = useState(getRandomCards(filteredCards, 15));
  const { countPosition, increment, decrement } = useCount(0);

  const card = quizCards[countPosition];
  const collectionName = collection ? collection.name : "lädt gerade...";

  const currentCard = quizCards[countPosition];

  function continueQuiz() {
    if (countPosition < quizCards.length - 1) {
      increment();
    } else {
      toast("Geschafft!");
    }
  }

  function onClickWrong() {
    updateCard({ ...currentCard, level: 1, timestamp: new Date() });
    continueQuiz();
  }

  function onClickRight() {
    updateCard({
      ...currentCard,
      level: Math.min(5, currentCard.level + 1),
      isMastered: currentCard.level === 5,
      timestamp: new Date(),
    });
    continueQuiz();
  }

  if (!filteredCards || filteredCards.length === 0) {
    return <h2>Dieser Kartenstapel enthält noch keine Karten.</h2>;
  }

  return (
    <StyledContainer>
      <CollectionHeader name={collectionName} />
      <CardContainer
        key={card.id}
        question={card.question}
        answer={card.answer}
        id={card.id}
        deleteCard={deleteCard}
        onToggle={onToggle}
        isMastered={card.isMastered}
        level={card.level}
        showArchiveButton={false}
        reversedDirection={collection.reversedDirection}
        resetCard={resetCard}
        languageQuestion={card.languageQuestion}
        languageAnswer={card.languageAnswer}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />
      <StyledSection>
        Fortschritt: {countPosition + 1} von {quizCards.length}
        <br />
        <StyledButtonNavBar>
          <StyledNavButton
            aria-label="Zurück zur vorherigen Karte"
            onClick={decrement}
            $hidden={countPosition === 0}
          >
            <IconWrapper>
              <FaArrowCircleLeft />
            </IconWrapper>
          </StyledNavButton>

          <StyledQuizButtonRight aria-label="wusste ich" onClick={onClickRight}>
            <IconWrapper>
              <PiSmileyDuotone />
            </IconWrapper>
          </StyledQuizButtonRight>

          <StyledQuizButtonWrong
            aria-label="wusste ich nicht"
            onClick={onClickWrong}
          >
            <IconWrapper>
              <PiSmileySadDuotone />
            </IconWrapper>
          </StyledQuizButtonWrong>

          <StyledNavButton
            aria-label="vor zur nächsten Karte"
            onClick={increment}
            $hidden={countPosition === quizCards.length - 1}
          >
            <IconWrapper>
              <FaArrowCircleRight />
            </IconWrapper>
          </StyledNavButton>
        </StyledButtonNavBar>
        <StyledLink
          aria-label="Zurück zur Kartenstapel-Übersicht"
          href={`/collections/${collection.id}`}
        >
          zurück zur Übersicht
        </StyledLink>
        <Space />
      </StyledSection>
    </StyledContainer>
  );
}
