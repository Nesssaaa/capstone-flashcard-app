import { StyledHeadlines } from "@/components/Headline.styled";
import Form from "../components/Form/Form";
import Navigation from "../components/Navigation/Navigation";
import styled from "styled-components";

export const StyledH1 = styled.h1`
  text-align: center;
`;

export default function NewPage({ addCard, collections, addCollection }) {
  return (
    <>
      <StyledHeadlines>Erstelle deine Lernkarten</StyledHeadlines>
      <Form
        onSubmit={addCard}
        collections={collections}
        addCollection={addCollection}
      />

      <Navigation />
    </>
  );
}
