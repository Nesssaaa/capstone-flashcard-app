import CardList from "../components/CardList/CardList";
import Navigation from "../components/Navigation/Navigation";

export default function AllCardsPage({
  cards,
  deleteCard,
  onToggle,
  resetCard,
}) {
  return (
    <>
      <div>
        <CardList
          cards={cards}
          deleteCard={deleteCard}
          onToggle={onToggle}
          resetCard={resetCard}
        />
        <Navigation />
      </div>
    </>
  );
}
