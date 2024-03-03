import {
  StyledCardContainerAnswer,
  StyledCardContainerQuestion,
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
        <StyledCardContainerQuestion
          onClick={flipCard}
          style={{ fontSize: `${calculateFontSize(question)}px` }}
        >
          {question}
        </StyledCardContainerQuestion>
        <StyledCardContainerAnswer
          onClick={flipCard}
          style={{ fontSize: `${calculateFontSize(answer)}px` }}
        >
          {answer}
        </StyledCardContainerAnswer>
      </ReactCardFlip>
      <br />
    </>
  );
}
