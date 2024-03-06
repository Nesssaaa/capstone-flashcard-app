import {
  StyledCardContainerAnswer,
  StyledCardContainerQuestion,
  StyledTextShow,
} from "./CardContainer.styled";
import ReactCardFlip from "react-card-flip";
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
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <StyledCardContainerQuestion onClick={flipCard}>
          <StyledTextShow
            readOnly
            textLength={question}
            value={question}
          ></StyledTextShow>
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
