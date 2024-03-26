import CardContainer from "../components/CardContainer/CardContainer";
import CardList from "../components/CardList/CardList";

import { StyledText, StyledPageName } from "../components/Archive.styled";
import Navigation from "../components/Navigation/Navigation";
import { StyledHeadlines } from "@/components/Headline.styled";
import CollectionList from "@/components/CollectionList/CollectionList";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export default function ArchivesPage({
  cards,
  deleteCard,
  onToggle,
  collections,
  deleteCollection,
}) {
  if (!cards) {
    return <LoadingSpinner />;
  }

  const filteredCards = cards ? cards.filter((card) => card.isMastered) : [];

  return (
    <>
      <StyledHeadlines>Das kann ich schon!</StyledHeadlines>
      {!filteredCards.length ? (
        <StyledText>Dein Archiv ist noch leer.</StyledText>
      ) : (
        <CollectionList
          collections={collections}
          cards={filteredCards}
          deleteCollection={deleteCollection}
        />
        // <CardList
        //   cards={filteredCards}
        //   onToggle={onToggle}
        //   deleteCard={deleteCard}
        // />
      )}
      <Navigation />
    </>
  );
}
