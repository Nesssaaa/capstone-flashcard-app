import Link from "next/link";
import CollectionList from "../../components/CollectionList/CollectionList";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import {
  IconWrapper,
  StyledLink,
} from "../../components/Navigation/Navigation.styled";
import Navigation from "../../components/Navigation/Navigation";

export default function CollectionsPage({ collections, deleteCollection }) {
  if (collections.length === 0) {
    return (
      <>
        <h1>Erstelle jetzt deinen ersten Kartenstapel!</h1>
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
      <h1>Deine Kartenstapel</h1>
      <CollectionList
        collections={collections}
        deleteCollection={deleteCollection}
      />
      <Navigation />
    </>
  );
}
