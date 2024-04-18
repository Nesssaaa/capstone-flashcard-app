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
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data: session } = useSession();

  const [text, setText] = useState("");
  const msg = new SpeechSynthesisUtterance();

  function speechHandler(msg) {
    console.log(answer);
    msg.text = answer;
    msg.lang = "de-DE";
    window.speechSynthesis.speak(msg);
  }

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

  function showCardMenu() {
    return (
      <CardMenu
        id={id}
        deleteCard={deleteCard}
        isMastered={isMastered}
        handleResetCard={handleResetCard}
      />
    );
  }

  return (
    <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
      <StyledCardContainerQuestion onClick={flipCard} $level={level}>
        {showCardMenu()}
        <StyledTextShow
          readOnly
          textLength={reversedDirection ? answer : question}
          value={reversedDirection ? answer : question}
        ></StyledTextShow>
        <IconWrapper>
          <MdTouchApp />
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
        {showCardMenu()}

        <StyledTextShow
          readOnly
          textLength={reversedDirection ? question : answer}
          value={reversedDirection ? question : answer}
        ></StyledTextShow>
        <IconWrapper>
          <MdTouchApp />
        </IconWrapper>

        <button onClick={() => speechHandler({ text })}>Speak</button>
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
