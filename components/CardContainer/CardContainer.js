import { Card } from "./CardContainer.styled";

export default function CardContainer({ question, answer }) {
  return (
    <>
      <Card>{question}</Card>
      <Card>{answer}</Card>
      <br />
    </>
  );
}
