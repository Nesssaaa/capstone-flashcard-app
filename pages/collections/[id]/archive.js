import CardList from "@/components/CardList/CardList";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import CollectionHeader from "@/components/CollectionHeader/CollectionHeader.js";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner.js";

export const StyledContainer = styled.div`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-fox);
`;

export default function CollectionArchiv({
  cards,
  getCollection,
  deleteCard,
  onToggle,
}) {
  const router = useRouter();
  const collection = getCollection(router.query.id);

  if (!collection) {
    return <LoadingSpinner />;
  }

  const filteredCards = collection
    ? cards
        .filter((card) => card.collection === collection.id)
        .filter((card) => card.isMastered === true)
    : [];

  return (
    <>
      <StyledContainer>
        <CollectionHeader name={collection.name} />
      </StyledContainer>
      {!filteredCards.length ? (
        <StyledContainer>
          <p>Dein Archiv ist noch leer.</p>
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
