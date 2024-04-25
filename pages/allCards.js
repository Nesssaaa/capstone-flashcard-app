import CardList from "../components/CardList/CardList";
import Navigation from "../components/Navigation/Navigation";
import { useSession } from "next-auth/react";
import SearchBar from "@/components/SearchBar/SearchBar";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function AllCardsPage({
  deleteCard,
  onToggle,
  resetCard,
  toggleCardDirection,
  isFlipped,
  setIsFlipped,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFlippedCardListActive, setIsFlippedCardListActive] = useState(false);

  const { data: cards, isLoading: isLoadingCards } = useSWR(
    searchTerm ? "/api/cards?filter=" + searchTerm : "/api/cards",
    fetcher
  );
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  function toggleAllFlipped() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <button onClick={toggleAllFlipped}>
        Zeige die Rückseite aller Karten an
      </button>

      <CardList
        cards={cards}
        deleteCard={deleteCard}
        onToggle={onToggle}
        resetCard={resetCard}
        toggleCardDirection={toggleCardDirection}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />

      <Navigation aria-label="Navigationsleiste" />
    </div>
  );
}
