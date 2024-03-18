import CardContainer from "../components/CardContainer/CardContainer";
import CardList from "../components/CardList/CardList";

import { StyledText, StyledPageName } from "../components/Archive.styled";
import Navigation from "../components/Navigation/Navigation";

export default function ArchivesPage({ cards, deleteCard, onToggle }) {
  if (!cards) {
    return "Loading...";
  }

  const filteredCards = cards ? cards.filter((card) => card.isMastered) : [];

  return (
    <>
      <StyledPageName>Das kann ich schon!</StyledPageName>
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
