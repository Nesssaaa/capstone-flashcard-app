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
  const { data: cards, isLoading: isLoadingCards } = useSWR(
    searchTerm ? "/api/cards?filter=" + searchTerm : "/api/cards",
    fetcher
  );
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <CardList
        cards={cards}
        deleteCard={deleteCard}
        onToggle={onToggle}
        resetCard={resetCard}
        toggleCardDirection={toggleCardDirection}
      />

      <Navigation />
    </div>
  );
}
