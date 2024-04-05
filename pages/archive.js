import { StyledText } from "../components/Archive.styled";
import Navigation from "../components/Navigation/Navigation";
import { StyledHeadlines } from "@/components/Headline.styled";
import CollectionList from "@/components/CollectionList/CollectionList";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import GlobalStyle from "../styles";

export default function ArchivesPage({ cards, collections, deleteCollection }) {
  if (!cards) {
    return <LoadingSpinner />;
  }

  const filteredCards = cards ? cards.filter((card) => card.isMastered) : [];

  return (
    <>
      <GlobalStyle isArchive={true} />
      <StyledHeadlines>Dein Archiv</StyledHeadlines>
      {!filteredCards.length ? (
        <StyledText>Dein Archiv ist noch leer.</StyledText>
      ) : (
        <CollectionList
          collections={collections}
          cards={filteredCards}
          deleteCollection={deleteCollection}
          archive={true}
        />
      )}
      <Navigation />
    </>
  );
}
