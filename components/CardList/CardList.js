import CardContainer from "../CardContainer/CardContainer";

export default function CardList({ initialData }) {
  return (
    <>
      {initialData.map((x) => (
        <div key={x.id}>
          <CardContainer question={x.question} answer={x.answer} />
        </div>
      ))}
    </>
  );
}
