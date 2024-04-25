import { StyledHeadlines } from "@/components/Headline.styled";
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
      <StyledHeadlines>Erstelle deine Lernkarten</StyledHeadlines>
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
