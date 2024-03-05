import CardList from "@/components/CardList/CardList";

export default function HomePage({ cards, deleteCard, toggleMasteredCards }) {
  return (
    <div>
      <CardList
        cards={cards}
        deleteCard={deleteCard}
        onToggle={toggleMasteredCards}
      />
    </div>
  );
}
