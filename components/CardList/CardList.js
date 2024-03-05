import ButtonNavBar from "../ButtonNavBar/ButtonNavBar";
import CardContainer from "../CardContainer/CardContainer";

export default function CardList({ cards, deleteCard, onToggle }) {
  return (
    <>
      {cards &&
        cards.map((card) => (
          <div key={card.id}>
            <CardContainer
              question={card.question}
              answer={card.answer}
              deleteCard={deleteCard}
              id={card.id}
              onToggle={() => onToggle(card.id)}
              isMastered={card.isMastered}
            />
          </div>
        ))}
    </>
  );
}
