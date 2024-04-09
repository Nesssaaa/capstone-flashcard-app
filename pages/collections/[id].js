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
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

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
  updateCard,
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

  async function handleResetClick() {
    const confirmFirst = await new Promise((resolve) => {
      confirmAlert({
        title: "Karten zurücksetzen?",
        message:
          "Möchtest du wirklich alle Karten auf Level 1 zurücksetzen und in deinen aktiven Kartenstapel verschieben?",
        buttons: [
          {
            label: "Ja, bitte.",
            onClick: () => resolve(true),
          },
          {
            label: "Nein, danke.",
            onClick: () => resolve(false),
          },
        ],
      });
    });

    if (confirmFirst) {
      //for each starts an asynchronous call for each card, but does not await the outcomes.
      //This is ok here, because we don'T do anything here afterwards anyways.
      filteredCards &&
        filteredCards.forEach(async (card) => {
          await resetCard(card);
          await updateCard({ ...card, isMastered: false });
        });
    }
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
            resetCard={resetCard}
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
