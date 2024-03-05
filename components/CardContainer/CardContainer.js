import {
  StyledCardContainerAnswer,
  StyledCardContainerQuestion,
  StyledTextShow,
} from "./CardContainer.styled";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { calculateFontSize } from "@/utils";
export default function CardContainer({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <StyledCardContainerQuestion onClick={flipCard}>
          <StyledTextShow readOnly textLength={question}>
            {question}
          </StyledTextShow>
        </StyledCardContainerQuestion>
        <StyledCardContainerAnswer onClick={flipCard}>
          <StyledTextShow readOnly textLength={answer}>
            {answer}
          </StyledTextShow>
        </StyledCardContainerAnswer>
      </ReactCardFlip>
    </>
  );
}
