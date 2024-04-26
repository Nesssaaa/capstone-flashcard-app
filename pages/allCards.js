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
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [reversedDirection, setReversedDirection] = useState(false);
  const { data: cards, isLoading: isLoadingCards } = useSWR(
    searchTerm ? "/api/cards?filter=" + searchTerm : "/api/cards",
    fetcher
  );
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  function toggleReversedDirection() {
    setReversedDirection(!reversedDirection);
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <button onClick={toggleReversedDirection}>
        {reversedDirection
          ? "Drehe alle Karten wieder um und zeige die Vorderseiten"
          : "Kartenrichtung umschalten und alle Rückseiten anzeigen"}
      </button>
      <CardList
        cards={cards}
        deleteCard={deleteCard}
        onToggle={onToggle}
        resetCard={resetCard}
        toggleCardDirection={toggleCardDirection}
        reversedDirection={reversedDirection}
      />

      <Navigation aria-label="Navigationsleiste" />
    </div>
  );
}
