import CardContainer from "../CardContainer/CardContainer";

export default function CardList({ cards, deleteCard, onToggle }) {
  return (
    <>
      {cards &&
        cards
          .filter((card) => card.isMastered === false)
          .map((card) => (
            <div key={card.id}>
              <CardContainer
                question={card.question}
                answer={card.answer}
                collection={card.collection}
                deleteCard={deleteCard}
                id={card.id}
                onToggle={onToggle}
                isMastered={card.isMastered}
              />
            </div>
          ))}
    </>
  );
}
