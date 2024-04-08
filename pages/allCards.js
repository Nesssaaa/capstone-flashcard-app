import CardList from "../components/CardList/CardList";
import Navigation from "../components/Navigation/Navigation";

export default function AllCardsPage({
  cards,
  deleteCard,
  onToggle,
  toggleCardDirection,
}) {
  return (
    <>
      <div>
        <CardList
          cards={cards}
          deleteCard={deleteCard}
          onToggle={onToggle}
          toggleCardDirection={toggleCardDirection}
        />
        <Navigation />
      </div>
    </>
  );
}
