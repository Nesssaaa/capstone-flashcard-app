import Link from "next/link";
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

  return (
    <>
      <StyledHeadlines>Deine Kartenstapel</StyledHeadlines>
      <CollectionList
        collections={collections}
        deleteCollection={deleteCollection}
        cards={cards}
      />
      <Navigation />
    </>
  );
}
