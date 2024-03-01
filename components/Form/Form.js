import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Form.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
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
  function calculateQuestionFontSize() {
    const wordCount = questionText.trim().split(/\s+/).length;
    const maxFontSize = 35;
    const minFontSize = 6;
    const newSize = Math.max(minFontSize, maxFontSize - wordCount / 4);
    return newSize;
  }

  function calculateAnswerFontSize() {
    const wordCount = answerText.trim().split(/\s+/).length;
    const maxFontSize = 35;
    const minFontSize = 10;
    const newSize = Math.max(minFontSize, maxFontSize - wordCount / 4);
    return newSize;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Frage
        <StyledInput
          onChange={handleQuestionChange} //arrow function?
          name="question"
          required
          placeholder="Gib hier deine Frage ein"
          type="text"
          style={{ fontSize: `${calculateQuestionFontSize()}px` }}
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
          style={{ fontSize: `${calculateAnswerFontSize()}px` }}
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
