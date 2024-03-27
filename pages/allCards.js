import CardList from "../components/CardList/CardList";
import Navigation from "../components/Navigation/Navigation";

export default function AllCardsPage({ cards, deleteCard, onToggle }) {
  const filteredCards = cards.filter((card) => card.isMastered === false);
  return (
    <>
      <div>
        <CardList
          cards={filteredCards}
          deleteCard={deleteCard}
          onToggle={onToggle}
        />
        <Navigation />
      </div>
    </>
  );
}
