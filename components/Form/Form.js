import {
  IconWrapper,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Form.styled";

import { MdOutlineSaveAlt } from "react-icons/md";
import { useState } from "react";
import { nanoid } from "nanoid";
//collection muss hier noch übergeben werden um beim edit alten value voranzuzeigen
export default function Form({
  onSubmit,
  collections,
  card = {},
  addCollection,
}) {
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [showNewCollection, setShowNewCollection] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(data);
    if (data.collection === "__NEW__") {
      // console.log("oh, wir brauchen eine neue Colection", data.newCollection);
      const newCollection = { id: nanoid(), name: data.newCollection };
      addCollection(newCollection);
      data.collection = newCollection.id;
    }
    onSubmit(data);

    event.target.reset();
    setShowNewCollection(false);
    event.target.elements.question.focus();
  }

  function handleQuestionChange(event) {
    setQuestionText(event.target.value);
  }

  function handleAnswerChange(event) {
    setAnswerText(event.target.value);
  }

  function handleCollectionChange(event) {
    setShowNewCollection(event.target.value === "__NEW__");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Erstelle neue Lernkarten</h2>
      <StyledLabel>
        Wähle einen passenden Kartenstapel
        <select
          name="collection"
          defaultValue={card.collection || ""}
          onChange={handleCollectionChange}
        >
          <option disabled value="">
            Bitte triff eine Auswahl
          </option>
          <optgroup label="Anlage neue Sammlung">
            <option value="__NEW__">Neuen Kartenstapel anlegen</option>
          </optgroup>
          <optgroup label="Bestehende Sammlung">
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.name}
              </option>
            ))}
          </optgroup>
        </select>
      </StyledLabel>
      {showNewCollection && <input name="newCollection" required />}
      <StyledLabel>
        Vorderseite
        <StyledInput
          onChange={handleQuestionChange}
          name="question"
          required
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
          required
          placeholder="Gib hier deine Antwort ein"
          type="text"
          defaultValue={card.answer}
          textLength={answerText}
        />
      </StyledLabel>
      <StyledButton type="submit">
        <IconWrapper>
          <MdOutlineSaveAlt />
        </IconWrapper>
      </StyledButton>
    </StyledForm>
  );
}
