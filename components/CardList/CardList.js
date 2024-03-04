import ButtonNavBar from "../ButtonNavBar/ButtonNavBar";
import CardContainer from "../CardContainer/CardContainer";

export default function CardList({ cards }) {
  return (
    <>
      {cards &&
        cards.map((card) => (
          <div key={card.id}>
            <CardContainer question={card.question} answer={card.answer} />
            <ButtonNavBar id={card.id} />
          </div>
        ))}
    </>
  );
}
