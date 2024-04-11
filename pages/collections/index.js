import CollectionList from "../../components/CollectionList/CollectionList";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import {
  IconWrapper,
  StyledLink,
} from "../../components/Navigation/Navigation.styled";
import Navigation from "../../components/Navigation/Navigation";
import { StyledHeadlines } from "@/components/Headline.styled";

export default function CollectionsPage({
  collections,
  deleteCollection,
  cards,
  editCard,
  resetCard,
}) {
  if (collections.length === 0) {
    return (
      <>
        <StyledHeadlines>
          Erstelle jetzt deinen ersten Kartenstapel!
        </StyledHeadlines>
        <StyledLink href={"/create"}>
          <IconWrapper>
            <MdOutlineCreateNewFolder />
          </IconWrapper>
        </StyledLink>
      </>
    );
  }

  const filteredCards = cards ? cards.filter((card) => !card.isMastered) : [];

  return (
    <>
      <StyledHeadlines>Deine Kartenstapel</StyledHeadlines>
      <CollectionList
        collections={collections}
        deleteCollection={deleteCollection}
        cards={filteredCards}
        editCard={editCard}
        resetCard={resetCard}
      />
      <Navigation />
    </>
  );
}
