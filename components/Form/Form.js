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
    event.target.reset();
    event.target.elements.question.focus();
  }
  const notify = () => toast("Karte erfolgreich hinzugefügt");
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Frage
        <StyledInput
          name="question"
          required
          placeholder="Gib hier deine Frage ein"
        />
      </StyledLabel>
      <StyledLabel>
        Antwort
        <StyledInput
          name="answer"
          required
          placeholder="Gib hier dein Antwort ein"
        />
      </StyledLabel>

      <StyledButton type="submit" onClick={notify}>
        Submit
      </StyledButton>
      <ToastContainer
        position="bottom-center"
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
