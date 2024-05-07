import {
  StyledCardContainerAnswer,
  StyledCardContainerQuestion,
  StyledTextShow,
  IconWrapper,
} from "./CardContainer.styled";
import ReactCardFlip from "react-card-flip";
import { MdTouchApp } from "react-icons/md";
import { useState } from "react";
import ButtonNavBar from "../ButtonNavBar/ButtonNavBar";
import CardMenu from "../CardMenu/CardMenu";
import { useSession } from "next-auth/react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

export default function CardContainer({
  question,
  answer,
  id,
  deleteCard,
  onToggle,
  isMastered,
  level,
  showArchiveButton = true,
  resetCard,
  reversedDirection,
  languageAnswer,
  languageQuestion,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data: session } = useSession();

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  function handleResetCard() {
    resetCard({
      id,
      question,
      answer,
      isMastered,
      level,
      user: session.user.id,
    });
  }

  const speechSynthesisUtterance = new SpeechSynthesisUtterance();

  function handleReadQuestion(event) {
    event.stopPropagation();
    speechSynthesisUtterance.text = question;
    speechSynthesisUtterance.lang = languageQuestion;
    window.speechSynthesis.speak(speechSynthesisUtterance);
  }

  function handleReadAnswer(event) {
    event.stopPropagation();
    speechSynthesisUtterance.text = answer;
    speechSynthesisUtterance.lang = languageAnswer;
    window.speechSynthesis.speak(speechSynthesisUtterance);
  }

  return (
    <ReactCardFlip
      aria-label="Durch Tippen auf die Karte kannst du diese umdrehen"
      flipDirection="vertical"
      isFlipped={isFlipped}
    >
      <StyledCardContainerQuestion onClick={flipCard} $level={level}>
        <CardMenu
          id={id}
          deleteCard={deleteCard}
          isMastered={isMastered}
          handleResetCard={handleResetCard}
        />
        <StyledTextShow
          readOnly
          textLength={reversedDirection ? answer : question}
          value={reversedDirection ? answer : question}
          aria-label="Text der Kartenvorderseite"
        ></StyledTextShow>
        <IconWrapper>
          <MdTouchApp />
          <HiOutlineSpeakerWave
            onClick={reversedDirection ? handleReadAnswer : handleReadQuestion}
          />
        </IconWrapper>

        {isMastered && (
          <ButtonNavBar
            id={id}
            deleteCard={deleteCard}
            onToggle={onToggle}
            isMastered={isMastered}
          />
        )}
      </StyledCardContainerQuestion>

      <StyledCardContainerAnswer onClick={flipCard} $level={level}>
        <CardMenu
          id={id}
          deleteCard={deleteCard}
          isMastered={isMastered}
          handleResetCard={handleResetCard}
        />

        <StyledTextShow
          aria-label="Text der Kartenrückseite"
          readOnly
          textLength={reversedDirection ? question : answer}
          value={reversedDirection ? question : answer}
        ></StyledTextShow>
        <IconWrapper>
          <MdTouchApp />
          <HiOutlineSpeakerWave onClick={handleReadAnswer} />
        </IconWrapper>

        <ButtonNavBar
          id={id}
          deleteCard={deleteCard}
          onToggle={onToggle}
          isMastered={isMastered}
          showArchiveButton={showArchiveButton}
        />
      </StyledCardContainerAnswer>
    </ReactCardFlip>
  );
}
