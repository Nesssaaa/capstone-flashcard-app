import CollectionList from "../../components/CollectionList/CollectionList";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import {
  IconWrapper,
  StyledLink,
} from "../../components/Navigation/Navigation.styled";
import Navigation from "../../components/Navigation/Navigation";
import { StyledHeadlines } from "@/components/Headline.styled";
import { useSession } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  position: relative;
  color: darkgray;
`;

export default function CollectionsPage({
  collections,
  deleteCollection,
  cards,
  editCard,
  resetCard,
  editCollection,
}) {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  if (!isLoggedIn) {
    return (
      <>
        <Wrapper>
          Lade...
          <Image
            src="/fox.png"
            width={120}
            height={120}
            fontSize={20}
            alt="kleiner Fuchskopf"
          />
        </Wrapper>
      </>
    );
  }

  if (collections.length === 0) {
    return (
      <>
        <StyledHeadlines>
          Erstelle jetzt deinen ersten Kartenstapel!
        </StyledHeadlines>
        <StyledLink
          aria-label="Hier kannst du deinen Kartenstapel erstellen"
          href={"/create"}
        >
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
        editCollection={editCollection}
      />
      <Navigation />
    </>
  );
}
