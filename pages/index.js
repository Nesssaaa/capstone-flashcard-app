import CardList from "@/components/CardList/CardList";

export default function HomePage({ cards, deleteCard, toggleMastered }) {
  return (
    <div>
      <CardList
        cards={cards}
        deleteCard={deleteCard}
        toggleMastered={toggleMastered}
      />
    </div>
  );
}
