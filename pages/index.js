import CardContainer from "@/components/CardContainer/CardContainer";
import CardList from "@/components/CardList/CardList";

export default function HomePage({ initialData }) {
  console.log("HomePage:", initialData);
  return (
    <div>
      <h1>Flashcard App</h1>
      <CardList initialData={initialData} />
    </div>
  );
}
