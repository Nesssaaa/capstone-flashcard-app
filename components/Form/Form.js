import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Form.styled";
export default function Form({ onSubmit /*state = {} */ }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data);
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

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
