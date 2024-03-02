import {
  StyledCardContainerAnswer,
  StyledCardContainerQuestion,
} from "./CardContainer.styled";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { calculateFontSize } from "@/utils";
export default function CardContainer({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  function handleQuestionChange(event) {
    setQuestionText(event.target.value);
  }

  function handleAnswerChange(event) {
    setAnswerText(event.target.value);
  }

  return (
    <>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <StyledCardContainerQuestion
          onClick={flipCard}
          onChange={handleQuestionChange}
          style={{ fontSize: `${calculateFontSize(questionText)}px` }}
        >
          {question}
        </StyledCardContainerQuestion>
        <StyledCardContainerAnswer
          onClick={flipCard}
          onChange={handleAnswerChange}
          style={{ fontSize: `${calculateFontSize(answerText)}px` }}
        >
          {answer}
        </StyledCardContainerAnswer>
      </ReactCardFlip>
      <br />
    </>
  );
}
