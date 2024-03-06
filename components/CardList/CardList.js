import CardContainer from "../CardContainer/CardContainer";

export default function CardList({ cards, deleteCard, toggleMastered }) {
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
                deleteCard={deleteCard}
                id={card.id}
                toggleMastered={toggleMastered}
                isMastered={card.isMastered}
              />
            </div>
          ))}
    </>
  );
}
