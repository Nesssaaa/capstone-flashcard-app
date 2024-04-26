import CardList from "../components/CardList/CardList";
import Navigation from "../components/Navigation/Navigation";
import SearchBar from "@/components/SearchBar/SearchBar";
import useSWR from "swr";
import { useState } from "react";
import styled from "styled-components";
import { SlDirections } from "react-icons/sl";

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
      <StyledToggleDirection
        aria-label="Kartenrichtung aller Karten umschalten"
        onClick={toggleReversedDirection}
      >
        {" "}
        <SlDirections />
        &nbsp;&nbsp;
        {reversedDirection
          ? "Vorderseiten aller Karten anzeigen"
          : "Rückseiten aller Karten anzeigen"}
      </StyledToggleDirection>
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

export const StyledToggleDirection = styled.button`
  width: 60%;
  font-size: 1rem;
  padding: 5px 5px;
  border-radius: 0.9rem;
  border: 1px solid var(--color-border-3);
  margin-bottom: 2rem;
  margin-left: 20%;
  margin-right: 5%;
  text-align: center;
  background: var(--color-fox);
  color: var(--color-font-2);
`;
