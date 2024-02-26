import CardList from "@/components/CardList/CardList";
import Header from "@/components/Header/Header";

export default function HomePage({ initialData }) {
  console.log("HomePage:", initialData);
  return (
    <div>
      {/* <Header /> */}
      <CardList initialData={initialData} />
    </div>
  );
}
