import CardContainer from "../CardContainer/CardContainer";

export default function CardList({ cards, deleteCard, onToggle, resetCard }) {
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
              onToggle={onToggle}
              isMastered={card.isMastered}
              level={card.level}
              resetCard={resetCard}
            />
          </div>
        ))}
    </>
  );
}
