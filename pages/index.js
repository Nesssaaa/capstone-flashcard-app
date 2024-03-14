import CardList from "@/components/CardList/CardList";

export default function HomePage({ cards, deleteCard, onToggle }) {
  console.log("Homepage", cards);
  return (
    <div>
      <CardList cards={cards} deleteCard={deleteCard} onToggle={onToggle} />
    </div>
  );
}
