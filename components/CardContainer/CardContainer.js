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
        <StyledCardContainerQuestion
          onClick={flipCard}
          // textLength={question.length}
        >
          <StyledTextShow
            readOnly
            style={{ fontSize: `${calculateFontSize(question)}px` }}
          >
            {question}
          </StyledTextShow>
        </StyledCardContainerQuestion>
        <StyledCardContainerAnswer
          onClick={flipCard}
          // textLength={answer.length}
        >
          <StyledTextShow
            readOnly
            style={{ fontSize: `${calculateFontSize(answer)}px` }}
          >
            {answer}
          </StyledTextShow>
        </StyledCardContainerAnswer>
      </ReactCardFlip>
    </>
  );
}
