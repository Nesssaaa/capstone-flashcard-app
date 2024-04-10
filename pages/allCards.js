import CardList from "../components/CardList/CardList";
import Navigation from "../components/Navigation/Navigation";
import { useSession } from "next-auth/react";

export default function AllCardsPage({ cards, deleteCard, onToggle }) {
  return (
    <>
      <div>
        <CardList cards={cards} deleteCard={deleteCard} onToggle={onToggle} />
        <Navigation />
      </div>
    </>
  );
}
