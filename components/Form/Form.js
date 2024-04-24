import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Select,
  NewCollectionInput,
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
  languageQuestion,
  languageAnswer,
}) {
  const router = useRouter();
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [showNewCollection, setShowNewCollection] = useState(false);
  const [localLanguageQuestion, setLocalLanguageQuestion] =
    useState(languageQuestion);
  const [localLanguageAnswer, setLocalLanguageAnswer] =
    useState(languageAnswer);

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

  function handleLanguageChangeQuestion(event) {
    setLocalLanguageQuestion(event.target.value);
  }

  function handleLanguageChangeAnswer(event) {
    setLocalLanguageAnswer(event.target.value);
  }

  return (
    <StyledForm
      aria-label="Mit diesem Formular erstellst du deine Lernkarte"
      onSubmit={handleSubmit}
    >
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
            <NewCollectionInput
              name="newCollection"
              required
              autoComplete="off"
            />
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
        Wähle die Vorlesesprache deiner Kartenvorderseite
        <Select
          id="questionLanguage"
          name="languageQuestion"
          required
          value={localLanguageQuestion}
          onChange={handleLanguageChangeQuestion}
        >
          <option value="de-DE">Deutsch</option>
          <option value="en-US">Englisch</option>
          <option value="es-ES">Spanisch</option>
          <option value="fr-FR">Französisch</option>
          <option value="it-IT">Italienisch</option>
          <option value="pt-PT">Portugiesisch</option>
          <option value="uk-UA">Ukrainisch</option>
          <option value="ru-RU">Russisch</option>
          <option value="pl-PL">Polnisch</option>
          <option value="nl-NL">Niederländisch</option>
          <option value="cs-CZ">Tschechisch</option>
          <option value="fi-FI">Finnisch</option>
          <option value="hu-HU">Ungarisch</option>
          <option value="ro-RO">Rumänisch</option>
          <option value="tr-TR">Türkisch</option>
          <option value="sv-SE">Schwedisch</option>
          <option value="sk-SK">Slowakisch</option>
          <option value="hr-HR">Kroatisch</option>
          <option value="bg-BG">Bulgarisch</option>
          <option value="el-GR">Griechisch</option>
        </Select>
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
      <StyledLabel>
        Wähle die Vorlesesprache deiner Kartenrückseite
        <Select
          id="answerLanguage"
          name="languageAnswer"
          required
          value={localLanguageAnswer}
          onChange={handleLanguageChangeAnswer}
        >
          <option value="de-DE">Deutsch</option>
          <option value="en-US">Englisch</option>
          <option value="es-ES">Spanisch</option>
          <option value="fr-FR">Französisch</option>
          <option value="it-IT">Italienisch</option>
          <option value="pt-PT">Portugiesisch</option>
          <option value="uk-UA">Ukrainisch</option>
          <option value="ru-RU">Russisch</option>
          <option value="pl-PL">Polnisch</option>
          <option value="nl-NL">Niederländisch</option>
          <option value="cs-CZ">Tschechisch</option>
          <option value="fi-FI">Finnisch</option>
          <option value="hu-HU">Ungarisch</option>
          <option value="ro-RO">Rumänisch</option>
          <option value="tr-TR">Türkisch</option>
          <option value="sv-SE">Schwedisch</option>
          <option value="sk-SK">Slowakisch</option>
          <option value="hr-HR">Kroatisch</option>
          <option value="bg-BG">Bulgarisch</option>
          <option value="el-GR">Griechisch</option>
        </Select>
      </StyledLabel>
      <FActionButton>
        <BsSendPlusFill />
      </FActionButton>
    </StyledForm>
  );
}
