import { StyledCardContainer } from "./CardContainer.styled";
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
        <StyledCardContainer onClick={flipCard}>{question}</StyledCardContainer>
        <StyledCardContainer onClick={flipCard}>{answer}</StyledCardContainer>
      </ReactCardFlip>
      <br />
    </>
  );
}
