import CardList from "../../components/CardList/CardList.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import CollectionNavbar from "@/components/CollectionNavBar/CollectionNavBar.js";
import Link from "next/link";
import CollectionHeader from "@/components/CollectionHeader/CollectionHeader.js";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner.js";
import FActionButton from "@/components/FaButton/FaButton.js";
import { MdQuiz } from "react-icons/md";

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
    return <LoadingSpinner />;
  }

  const isMastered = router.query["ismastered"] === "true";

  const filteredCards = collection
    ? cards
        .filter((card) => card.collection === collection.id)
        .filter((card) => card.isMastered === isMastered)
    : [];

  function handleQuizClick() {
    router.push(`/collections/${collection.id}/quiz`);
  }

  return (
    <h1>
      <StyledContainer>
        {isMastered && <CollectionHeader name={`${collection.name}-Archiv`} />}
        {!isMastered && <CollectionHeader name={collection.name} />}
      </StyledContainer>
      {!isMastered && !filteredCards.length ? (
        <StyledContainer>
          <p>Dein Kartenstapel ist noch leer.</p>
          <br />
          <p>
            <StyledLink href={"/create"}>Füge neue Karten hinzu!</StyledLink>
          </p>
        </StyledContainer>
      ) : (
        <>
          <CardList
            cards={filteredCards}
            deleteCard={deleteCard}
            onToggle={onToggle}
          />
        </>
      )}
      {!isMastered && (
        <FActionButton onClick={handleQuizClick}>
          <MdQuiz />
        </FActionButton>
      )}
      <CollectionNavbar id={collection.id} />
    </h1>
  );
}
