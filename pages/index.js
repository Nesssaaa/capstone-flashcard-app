import CardList from "../components/CardList/CardList";
import Navigation from "../components/Navigation/Navigation";

export default function HomePage({ cards, deleteCard, onToggle }) {
  return (
    <>
      <div>
        <CardList cards={cards} deleteCard={deleteCard} onToggle={onToggle} />
        <Navigation />
      </div>
    </>
  );
}
