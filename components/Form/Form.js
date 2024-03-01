import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Form.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Form({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newCardData = Object.fromEntries(new FormData(event.target));
    onSubmit(newCardData);
    toast("Karte erfolgreich hinzugefügt");
    event.target.reset();
    event.target.elements.question.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Frage
        <StyledInput
          name="question"
          required
          placeholder="Gib hier deine Frage ein"
          type="text"
        />
      </StyledLabel>
      <StyledLabel>
        Antwort
        <StyledInput
          name="answer"
          required
          placeholder="Gib hier dein Antwort ein"
          type="text"
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
