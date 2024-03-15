import CardList from "../../components/CardList/CardList.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link.js";

export const StyledContainer = styled.div`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-fox);
`;

export default function CollectionCardList({
  cards,
  getCollection,
  deleteCard,
  onToggle,
}) {
  const router = useRouter();
  const collection = getCollection(router.query.id);

  if (!collection) {
    return "Loading...";
  }

  const filteredCards = collection
    ? cards.filter((card) => card.collection === collection.id)
    : [];
  console.log("hier kommt die collection-id", collection, router.query.id);

  return (
    <>
      <StyledContainer>
        <h1>{collection.name}</h1>
      </StyledContainer>
      {!filteredCards.length ? (
        <StyledContainer>
          <p>
            Dein Kartenstapel ist noch leer.
            <br />
            <StyledLink href={"/"}>Füge neue Karten hinzu!</StyledLink>
          </p>
        </StyledContainer>
      ) : (
        <CardList
          cards={filteredCards}
          deleteCard={deleteCard}
          onToggle={onToggle}
        />
      )}
    </>
  );
}
