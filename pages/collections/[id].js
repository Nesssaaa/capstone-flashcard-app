import CardList from "../../components/CardList/CardList.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import CollectionNavbar from "@/components/CollectionNavBar/CollectionNavBar.js";
import Link from "next/link";
import CollectionHeader from "@/components/CollectionHeader/CollectionHeader.js";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner.js";
import FActionButton from "@/components/FaButton/FaButton.js";
import { MdQuiz } from "react-icons/md";
import { GiCardDraw } from "react-icons/gi";
import GlobalStyle from "../../styles.js";

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
  resetCard,
  onToggle,
}) {
  const router = useRouter();
  const collection = getCollection(router.query.id);

  if (!collection) {
    return <LoadingSpinner />;
  }

  const isArchivePage = router.query["archive"] === "true";

  const filteredCards = collection
    ? cards
        .filter((card) => card.collection === collection.id)
        .filter((card) => card.isMastered === isArchivePage)
    : [];

  function handleQuizClick() {
    router.push(`/collections/${collection.id}/quiz`);
  }

  function handleResetClick() {
    filteredCards &&
      filteredCards.forEach(async (card) => {
        await resetCard(card);
      });
  }

  const headerName = isArchivePage
    ? `${collection.name}-Archiv`
    : collection.name;

  return (
    <>
      <GlobalStyle isArchive={isArchivePage} />
      <StyledContainer>
        <CollectionHeader name={headerName} />
      </StyledContainer>
      {!isArchivePage && !filteredCards.length ? (
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
      {!isArchivePage && (
        <FActionButton onClick={handleQuizClick}>
          <MdQuiz />
        </FActionButton>
      )}

      {isArchivePage && (
        <FActionButton onClick={handleResetClick}>
          <GiCardDraw />
        </FActionButton>
      )}

      <CollectionNavbar id={collection.id} />
    </>
  );
}
