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
export default function CardContainer({
  question,
  answer,
  id,
  deleteCard,
  onToggle,
  isMastered,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
        <StyledCardContainerQuestion onClick={flipCard}>
          <StyledTextShow
            readOnly
            textLength={question}
            value={question}
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
        </StyledCardContainerQuestion>
        <StyledCardContainerAnswer onClick={flipCard}>
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
    </>
  );
}
