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

export default function CardContainer({
  question,
  answer,
  id,
  deleteCard,
  onToggle,
  isMastered,
  level,
  showArchiveButton = true,
  reversedDirection,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  function stopMenuPropagation(event) {
    event.stopPropagation();
  }

  return (
    <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
      <StyledCardContainerQuestion onClick={flipCard} $level={level}>
        <CardMenu
          onClick={stopMenuPropagation}
          id={id}
          deleteCard={deleteCard}
          isMastered={isMastered}
        />
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

      <StyledCardContainerAnswer
        onClick={flipCard}
        $level={level}
        isMastered={isMastered}
      >
        <CardMenu onClick={stopMenuPropagation} />

        <StyledTextShow
          readOnly
          textLength={reversedDirection ? question : answer}
          value={reversedDirection ? question : answer}
        ></StyledTextShow>
        <IconWrapper>
          <MdTouchApp />
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
