import Form from "../components/Form/Form";
import Navigation from "../components/Navigation/Navigation";

export default function NewPage({
  addCard,
  collections,
  addCollection,
  languageQuestion,
  languageAnswer,
}) {
  return (
    <>
      <Form
        aria-label="Erstelle eine neue Lernkarte"
        onSubmit={addCard}
        collections={collections}
        addCollection={addCollection}
        languageQuestion={languageQuestion}
        languageAnswer={languageAnswer}
      />

      <Navigation aria-label="Navigationsleiste" />
    </>
  );
}
