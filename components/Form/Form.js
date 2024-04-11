import {
  IconWrapper,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  Select,
} from "./Form.styled";

import FActionButton from "../FaButton/FaButton";
import { BsSendPlusFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Form({
  onSubmit,
  collections = [],
  card = {},
  addCollection,
}) {
  const router = useRouter();
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [showNewCollection, setShowNewCollection] = useState(false);
  const [collectionId, setCollectionId] = useState(
    card.collection || router.query["collection"] || ""
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));

    if (data.collection === "__NEW__") {
      const newCollection = await addCollection({ name: data.newCollection });
      data.collection = newCollection.id;
    }

    // get current level from existing card or assign level 1, if card is new
    data.level = card.level || 1;
    const success = await onSubmit(data);
    if (success) {
      event.target.reset();
      setCollectionId(data.collection);
      setShowNewCollection(false);

      event.target.elements.question.focus();
    }
  }

  function handleQuestionChange(event) {
    setQuestionText(event.target.value);
  }

  function handleAnswerChange(event) {
    setAnswerText(event.target.value);
  }

  function handleCollectionChange(event) {
    setShowNewCollection(event.target.value === "__NEW__");
    setCollectionId(event.target.value);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Wähle einen passenden Kartenstapel
        <Select
          name="collection"
          required
          value={collectionId}
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
        </Select>
      </StyledLabel>
      {showNewCollection && (
        <>
          <StyledLabel>
            Name des neuen Kartenstapels
            <input name="newCollection" required autoComplete="off" />
          </StyledLabel>
        </>
      )}
      <StyledLabel>
        Vorderseite
        <StyledInput
          id="question"
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
          id="answer"
          onChange={handleAnswerChange}
          name="answer"
          required
          placeholder="Gib hier deine Antwort ein"
          type="text"
          defaultValue={card.answer}
          textLength={answerText}
        />
      </StyledLabel>
      <FActionButton>
        <BsSendPlusFill />
      </FActionButton>
    </StyledForm>
  );
}
