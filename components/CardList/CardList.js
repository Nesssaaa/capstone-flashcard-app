import CardContainer from "../CardContainer/CardContainer";

export default function CardList({
  cards,
  deleteCard,
  onToggle,
  resetCard,
  reversedDirection,
  isFlipped,
  setIsFlipped,
}) {
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
              reversedDirection={reversedDirection}
              languageAnswer={card.languageAnswer}
              languageQuestion={card.languageQuestion}
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
            />
          </div>
        ))}
    </>
  );
}
