import {
  StyledCardContainerAnswer,
  StyledCardContainerQuestion,
} from "./CardContainer.styled";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function CardContainer({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <StyledCardContainerQuestion onClick={flipCard}>
          {question}
        </StyledCardContainerQuestion>
        <StyledCardContainerAnswer onClick={flipCard}>
          {answer}
        </StyledCardContainerAnswer>
      </ReactCardFlip>
      <br />
    </>
  );
}
