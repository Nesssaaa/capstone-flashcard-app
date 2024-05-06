import { useState } from "react";
import useCount from "@/components/quizPositionCounter.js";
import { getRandomCards } from "@/utils.js";
import CardContainer from "@/components/CardContainer/CardContainer.js";
import { useRouter } from "next/router";
import { PiSmileyDuotone, PiSmileySadDuotone } from "react-icons/pi";
import {
  StyledLink,
  StyledContainer,
  StyledSection,
  StyledButtonNavBar,
  IconWrapper,
  StyledQuizButtonRight,
  StyledQuizButtonWrong,
  StyledContainerWrapper,
  StyledProgressContainer,
  StyledSummaryContainer,
  StyledText,
  StyledSummary,
  StyledButton,
  StyledButtonContainer,
  StyledH2,
  Wrapper,
  StyledImage,
} from "@/components/QuizPage.styled.js";

import { toast } from "react-toastify";
import { ThemeProvider } from "styled-components";

export default function QuizPage({
  cards,
  getCollection,
  onToggle,
  deleteCard,
  updateCard,
  resetCard,
}) {
  const router = useRouter();
  const collection = getCollection(router.query.id);

  function getNewQuizCards() {
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
    return getRandomCards(filteredCards, 15);
  }

  const [quizCards, setQuizCards] = useState(getNewQuizCards);
  const { countPosition, increment, reset } = useCount(0);
  const [rightClicks, setRightClicks] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      toast("Gut! Weiter!");
      onClickRight();
    }
    if (isRightSwipe) {
      toast("Schade... nächstes Mal!");
      onClickWrong();
    }
  };

  const card = quizCards[countPosition];

  const currentCard = quizCards[countPosition];

  function continueQuiz() {
    if (countPosition < quizCards.length - 1) {
      increment();
    } else {
      setShowSummary(true);
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
    setRightClicks((prevCount) => prevCount + 1);
    continueQuiz();
  }

  function handleClickYes() {
    console.log("1:", quizCards);
    setQuizCards(getNewQuizCards());
    reset();
    setRightClicks(0);
    setShowSummary(false);
  }

  console.log(quizCards);

  function handleClickNo() {
    console.log("Link zu Collections");
    router.push("/collections/");
  }

  if (!quizCards || quizCards.length === 0) {
    return <StyledH2>Dieser Kartenstapel enthält noch keine Karten.</StyledH2>;
  }

  function quizTheme(props) {
    return {
      ...props,
      cardContainer: {
        useAllAvailableSpace: true,
      },
    };
  }

  return (
    <>
      {!showSummary && (
        <StyledContainer>
          <StyledContainerWrapper
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <ThemeProvider theme={quizTheme}>
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
              />
            </ThemeProvider>
          </StyledContainerWrapper>
          <StyledSection>
            <StyledButtonNavBar>
              <StyledQuizButtonRight
                aria-label="wusste ich"
                onClick={onClickRight}
              >
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
            </StyledButtonNavBar>
            <StyledProgressContainer>
              Fortschritt: {countPosition + 1} von {quizCards.length}
            </StyledProgressContainer>
            <StyledLink
              aria-label="Zurück zur Kartenstapel-Übersicht"
              href={`/collections/${collection.id}`}
            >
              zurück zur Übersicht
            </StyledLink>
          </StyledSection>
        </StyledContainer>
      )}
      {showSummary && (
        <>
          <StyledSummaryContainer>
            {rightClicks == quizCards.length ? (
              <>
                <StyledText>Super!</StyledText>
                <StyledText>
                  Du hast alle Karten richtig beantwortet.
                </StyledText>
                <StyledText>Weiter so, du Schlaufuchs!</StyledText>
                <Wrapper>
                  <StyledImage
                    src="/fox.png"
                    width={120}
                    height={120}
                    fontSize={20}
                    alt="kleiner Fuchskopf"
                    priority
                  />
                </Wrapper>
              </>
            ) : (
              <StyledSummary>
                Du hast {rightClicks} von {quizCards.length} Karte
                {quizCards.length === 1 ? "" : "n"} richtig beantwortet!
              </StyledSummary>
            )}
            <StyledText>Möchtest du ein neues Quiz starten?</StyledText>
            <StyledButtonContainer>
              <StyledButton aria-label="ja" onClick={handleClickYes}>
                Ja
              </StyledButton>
              <StyledButton aria-label="nein" onClick={handleClickNo}>
                Nein
              </StyledButton>
            </StyledButtonContainer>
          </StyledSummaryContainer>
        </>
      )}
    </>
  );
}

// set initial page props that are available in _app.js.
QuizPage.getInitialProps = () => {
  return {
    // globalStyleOverrides overrides style properties used in the Layout
    globalStyleOverride: {
      useFlexMain: true,
    },
  };
};
