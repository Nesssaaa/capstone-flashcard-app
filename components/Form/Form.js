import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Form.styled";

import { useState } from "react";
import { calculateFontSize } from "@/utils";
export default function Form({ onSubmit, card = {} }) {
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data);

    event.target.reset();
    event.target.elements.question.focus();
  }

  function handleQuestionChange(event) {
    setQuestionText(event.target.value);
  }

  function handleAnswerChange(event) {
    setAnswerText(event.target.value);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Frage
        <StyledInput
          onChange={handleQuestionChange}
          name="question"
          required
          placeholder="Gib hier deine Frage ein"
          type="text"
          defaultValue={card.question}
          style={{ fontSize: `${calculateFontSize(questionText)}px` }}
        />
      </StyledLabel>
      <StyledLabel>
        Antwort
        <StyledInput
          onChange={handleAnswerChange}
          name="answer"
          required
          placeholder="Gib hier dein Antwort ein"
          type="text"
          defaultValue={card.answer}
          style={{ fontSize: `${calculateFontSize(answerText)}px` }}
        />
      </StyledLabel>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
