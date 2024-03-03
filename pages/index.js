import CardList from "@/components/CardList/CardList";

export default function HomePage({ initialData, cards, deleteCard }) {
  return (
    <div>
      <CardList
        initialData={initialData}
        cards={cards}
        deleteCard={deleteCard}
      />
    </div>
  );
}
