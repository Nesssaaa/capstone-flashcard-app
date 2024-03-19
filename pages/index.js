import CardList from "../components/CardList/CardList";
import Navigation from "../components/Navigation/Navigation";
import { useState, useEffect } from "react";

export default function HomePage({ cards, deleteCard, onToggle }) {
  // const [isReload, setIsReload] = useState(true);

  // useEffect(() => {
  //   if (isReload) {
  //     window.location.reload();
  //     setIsReload(false);
  //   }
  // }, [isReload]);

  // useEffect(() => {
  //   window.location.reload();
  // }, []);

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
