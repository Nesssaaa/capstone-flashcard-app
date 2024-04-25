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
}) {
  const router = useRouter();
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [showNewCollection, setShowNewCollection] = useState(false);

  const languageOptions = [
    { value: "de-DE", label: "Deutsch" },
    { value: "en-US", label: "Englisch" },
    { value: "es-ES", label: "Spanisch" },
    { value: "fr-FR", label: "Französisch" },
    { value: "it-IT", label: "Italienisch" },
    { value: "pt-PT", label: "Portugiesisch" },
    { value: "uk-UA", label: "Ukrainisch" },
    { value: "ru-RU", label: "Russisch" },
    { value: "pl-PL", label: "Polnisch" },
    { value: "nl-NL", label: "Niederländisch" },
    { value: "cs-CZ", label: "Tschechisch" },
    { value: "fi-FI", label: "Finnisch" },
    { value: "hu-HU", label: "Ungarisch" },
    { value: "ro-RO", label: "Rumänisch" },
    { value: "tr-TR", label: "Türkisch" },
    { value: "sv-SE", label: "Schwedisch" },
    { value: "sk-SK", label: "Slowakisch" },
    { value: "hr-HR", label: "Kroatisch" },
    { value: "bg-BG", label: "Bulgarisch" },
    { value: "el-GR", label: "Griechisch" },
  ];

  const sortedLanguageOptions = [...languageOptions].sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  const defaultLanguage = "de-DE";

  const [selectedLanguageQuestion, setSelectedLanguageQuestion] =
    useState(defaultLanguage);

  const [selectedLanguageAnswer, setSelectedLanguageAnswer] =
    useState(defaultLanguage);

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
    data.languageQuestion = data.languageQuestion || selectedLanguageQuestion;
    data.languageAnswer = data.languageAnswer || selectedLanguageAnswer;

    const success = await onSubmit(data);
    if (success) {
      event.target.reset();
      setCollectionId(data.collection);
      setShowNewCollection(false);
      setSelectedLanguageQuestion(data.languageQuestion);
      setSelectedLanguageAnswer(data.languageAnswer);

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
    setSelectedLanguageQuestion(event.target.value);
  }

  function handleLanguageChangeAnswer(event) {
    setSelectedLanguageAnswer(event.target.value);
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
          value={selectedLanguageQuestion}
          onChange={handleLanguageChangeQuestion}
        >
          {sortedLanguageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
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
          value={selectedLanguageAnswer}
          onChange={handleLanguageChangeAnswer}
        >
          {sortedLanguageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </StyledLabel>
      <FActionButton>
        <BsSendPlusFill />
      </FActionButton>
    </StyledForm>
  );
}
