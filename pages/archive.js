import CardContainer from "@/components/CardContainer/CardContainer";

export default function ArchivesPage({ cards, deleteCard, toggleMastered }) {
  return (
    <>
      <h1>Archiv - schon geschafft!!</h1>
      <ul>
        {cards
          .filter((card) => card.isMastered) // isMastered = "false", trotzdem true, weil es nicht "empty" ist
          .map((card) => (
            <div key={card.id}>
              <CardContainer
                question={card.question}
                answer={card.answer}
                deleteCard={deleteCard}
                id={card.id}
                toggleMastered={toggleMastered}
              />
            </div>
          ))}
      </ul>
    </>
  );
}
