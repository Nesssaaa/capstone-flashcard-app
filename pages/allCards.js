import CardList from "../components/CardList/CardList";
import Navigation from "../components/Navigation/Navigation";
import { useSession } from "next-auth/react";

export default function AllCardsPage({
  cards,
  deleteCard,
  onToggle,
  resetCard,
  toggleCardDirection,
}) {
  return (
    <>
      <div>
        <CardList
          cards={cards}
          deleteCard={deleteCard}
          onToggle={onToggle}
          resetCard={resetCard}
          toggleCardDirection={toggleCardDirection}
        />
        <Navigation />
      </div>
    </>
  );
}
