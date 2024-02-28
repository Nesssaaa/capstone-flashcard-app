import CardContainer from "../CardContainer/CardContainer";

export default function CardList({ initialData }) {
  return (
    <>
      {initialData.map((card) => (
        <div key={card.id}>
          <CardContainer question={card.question} answer={card.answer} />
        </div>
      ))}
    </>
  );
}
