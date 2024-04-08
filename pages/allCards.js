import CardList from "../components/CardList/CardList";
import Navigation from "../components/Navigation/Navigation";

export default function AllCardsPage({
  cards,
  deleteCard,
  onToggle,
  toggleCardDirection,
  hidden,
}) {
  return (
    <>
      <div>
        <CardList
          cards={cards}
          deleteCard={deleteCard}
          onToggle={onToggle}
          toggleCardDirection={toggleCardDirection}
          hidden={hidden}
        />
        <Navigation />
      </div>
    </>
  );
}
