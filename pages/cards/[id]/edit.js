import { useRouter } from "next/router";
import Form from "../../../components/Form/Form";
import styled from "styled-components";
import { StyledHeadlines } from "@/components/Headline.styled";

export const StyledH1 = styled.h1`
  text-align: center;
`;

export default function EditPage({
  getCard,
  editCard,
  collections,
  addCollection,
  languageQuestion,
  languageAnswer,
}) {
  const router = useRouter();
  const card = getCard(router.query.id);

  const isMastered = router.query["ismastered"] === "true";

  if (!card) {
    return "Error";
  }

  async function onSubmit(data) {
    const success = await editCard({ ...card, ...data });
    if (success) {
      router.push(`/collections/${card.collection}?ismastered=${isMastered}`);
    }
  }

  return (
    <>
      <StyledHeadlines>Bearbeite deine Lernkarten</StyledHeadlines>
      <Form
        onSubmit={onSubmit}
        card={card}
        collections={collections}
        addCollection={addCollection}
        languageQuestion={languageQuestion}
        languageAnswer={languageAnswer}
      />
    </>
  );
}
