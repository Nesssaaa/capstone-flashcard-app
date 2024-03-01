import CardList from "@/components/CardList/CardList";

export default function HomePage({ initialData, cards }) {
  return (
    <div>
      <CardList initialData={initialData} cards={cards} />
    </div>
  );
}
