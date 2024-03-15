import CardList from "@/components/CardList/CardList";

export default function HomePage({ cards, deleteCard, onToggle }) {
  return (
    <div>
      <CardList cards={cards} deleteCard={deleteCard} onToggle={onToggle} />
    </div>
  );
}
