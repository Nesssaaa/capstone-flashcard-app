import CardContainer from "../components/CardContainer/CardContainer";
import CardList from "../components/CardList/CardList";

import { StyledText, StyledPageName } from "../components/Archive.styled";
import Navigation from "../components/Navigation/Navigation";
import { StyledHeadlines } from "@/components/Headline.styled";

export default function ArchivesPage({ cards, deleteCard, onToggle }) {
  if (!cards) {
    return "Loading...";
  }

  const filteredCards = cards ? cards.filter((card) => card.isMastered) : [];

  return (
    <>
      <StyledHeadlines>Das kann ich schon!</StyledHeadlines>
      {!filteredCards.length ? (
        <StyledText>Dein Archiv ist noch leer.</StyledText>
      ) : (
        <CardList
          cards={filteredCards}
          onToggle={onToggle}
          deleteCard={deleteCard}
        />
      )}
      <Navigation />
    </>
  );
}
