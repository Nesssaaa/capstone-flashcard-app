import { useRouter } from "next/router";
import Form from "../../../components/Form/Form";
import styled from "styled-components";

//die h2 vom Form muss für edit-mode noch angepasst werden

export const StyledH1 = styled.h1`
  text-align: center;
`;

export default function EditPage({
  getCard,
  editCard,
  collections,
  addCollection,
}) {
  const router = useRouter();
  const card = getCard(router.query.id);

  if (!card) {
    return "Error";
  }

  function onSubmit(data) {
    editCard({ ...data, id: card.id });
    router.push(`/`);
  }

  return (
    <>
      <StyledH1>Bearbeite deine Flashcard</StyledH1>
      <Form
        onSubmit={onSubmit}
        card={card}
        collections={collections}
        addCollection={addCollection}
      />
    </>
  );
}
