import ButtonNavBar from "../ButtonNavBar/ButtonNavBar";
import CardContainer from "../CardContainer/CardContainer";

export default function CardList({ cards }) {
  return (
    <>
      {cards.map((newCard) => (
        <div key={newCard.id}>
          <CardContainer question={newCard.question} answer={newCard.answer} />
          <ButtonNavBar />
        </div>
      ))}
    </>
  );
}
