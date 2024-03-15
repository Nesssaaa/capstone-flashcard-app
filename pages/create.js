import Form from "../components/Form/Form";
import styled from "styled-components";

export const StyledH1 = styled.h1`
  text-align: center;
`;

export default function NewPage({ addCard, collections, addCollection }) {
  return (
    <>
      <StyledH1>Erstelle deine Lernkarten</StyledH1>
      <Form
        onSubmit={addCard}
        collections={collections}
        addCollection={addCollection}
      />
    </>
  );
}
