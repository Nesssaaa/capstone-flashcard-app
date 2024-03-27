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
import CardLevel from "../CardLevel/CardLevel";

export default function CardContainer({
  question,
  answer,
  id,
  deleteCard,
  onToggle,
  isMastered,
  level,
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
      <StyledCardContainerQuestion onClick={flipCard} level={level}>
        <CardLevel level={level} />
        <CardMenu
          onClick={stopMenuPropagation}
          id={id}
          deleteCard={deleteCard}
        />
        <StyledTextShow
          readOnly
          textLength={question}
          value={question}
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

      <StyledCardContainerAnswer onClick={flipCard}>
        <CardMenu onClick={stopMenuPropagation} />
        <StyledTextShow
          readOnly
          textLength={answer}
          value={answer}
        ></StyledTextShow>
        <IconWrapper>
          <MdTouchApp />
        </IconWrapper>
        <ButtonNavBar
          id={id}
          deleteCard={deleteCard}
          onToggle={onToggle}
          isMastered={isMastered}
        />
      </StyledCardContainerAnswer>
    </ReactCardFlip>
  );
}
