import CardList from "@/components/CardList/CardList";

export default function HomePage({ cards, deleteCard }) {
  return (
    <div>
      <CardList cards={cards} deleteCard={deleteCard} />
    </div>
  );
}
