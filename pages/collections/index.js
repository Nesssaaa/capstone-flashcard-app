import CollectionList from "../../components/CollectionList/CollectionList";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import {
  IconWrapper,
  StyledLink,
} from "../../components/Navigation/Navigation.styled";
import Navigation from "../../components/Navigation/Navigation";
import styled from "styled-components";

export const StyledHeadline = styled.h1`
  text-align: center;
`;

export default function CollectionsPage({ collections }) {
  if (collections.length === 0) {
    return (
      <>
        <StyledHeadline>
          Erstelle jetzt deinen ersten Kartenstapel!
        </StyledHeadline>
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
      <StyledHeadline>Deine Kartenstapel</StyledHeadline>
      <CollectionList collections={collections} />
      <Navigation />
    </>
  );
}
