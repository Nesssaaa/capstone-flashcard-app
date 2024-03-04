import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Form.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { calculateFontSize } from "@/utils";
export default function Form({ onSubmit }) {
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const newCardData = Object.fromEntries(new FormData(event.target));
    onSubmit(newCardData);
    toast("Karte erfolgreich hinzugefügt");
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
          style={{ fontSize: `${calculateFontSize(answerText)}px` }}
        />
      </StyledLabel>

      <StyledButton type="submit">Submit</StyledButton>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
    </StyledForm>
  );
}
