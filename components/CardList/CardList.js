import ButtonNavBar from "../ButtonNavBar/ButtonNavBar";
import CardContainer from "../CardContainer/CardContainer";

export default function CardList({ initialData, cards }) {
  return (
    <>
      {cards
        ? cards.map((newCard) => (
            <div key={newCard.id}>
              <CardContainer
                question={newCard.question}
                answer={newCard.answer}
              />
            </div>
          ))
        : null}
      {initialData.map((card) => (
        <div key={card.id}>
          <CardContainer question={card.question} answer={card.answer} />
          <ButtonNavBar />
        </div>
      ))}
    </>
  );
}
