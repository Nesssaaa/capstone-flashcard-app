import { StyledCardContainer } from "./CardContainer.styled";

export default function CardContainer({ question, answer }) {
  return (
    <>
      <StyledCardContainer>{question}</StyledCardContainer>
      <StyledCardContainer>{answer}</StyledCardContainer>
      <br />
    </>
  );
}
