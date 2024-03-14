import Link from "next/link";
import CollectionList from "../../components/CollectionList/CollectionList";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import {
  IconWrapper,
  StyledLink,
} from "../../components/Navigation/Navigation.styled";

export default function CollectionsPage({ collections }) {
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
      <CollectionList collections={collections} />
    </>
  );
}