import {
  IconWrapper,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledFieldset,
} from "./Form.styled";

import { MdOutlineSaveAlt } from "react-icons/md";
import { useState } from "react";

export default function Form({ onSubmit, card = {} }) {
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(data);
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
      <StyledFieldset>
        <legend>Erstelle einen neuen Kartenstapel</legend>
        <StyledLabel>
          Name
          <input
            onChange={handleQuestionChange}
            type="text"
            name="collection"
            //Problem, wenn required, können nicht nur Karten oder nur Collections angelegt werden...
            placeholder="Gib hier einen Namen ein"
            defaultValue={card.collection}
          ></input>
        </StyledLabel>
      </StyledFieldset>

      <StyledFieldset>
        <legend>Erstelle eine neue Lernkarte</legend>
        <StyledLabel>
          Vorderseite
          <StyledInput
            onChange={handleQuestionChange}
            name="question"
            // required
            placeholder="Gib hier deine Frage ein"
            type="text"
            defaultValue={card.question}
            textLength={questionText}
          />
        </StyledLabel>
        <StyledLabel>
          Rückseite
          <StyledInput
            onChange={handleAnswerChange}
            name="answer"
            // required
            placeholder="Gib hier deine Antwort ein"
            type="text"
            defaultValue={card.answer}
            textLength={answerText}
          />
        </StyledLabel>
      </StyledFieldset>
      <StyledButton type="submit">
        <IconWrapper>
          <MdOutlineSaveAlt />
        </IconWrapper>
      </StyledButton>
    </StyledForm>
  );
}
