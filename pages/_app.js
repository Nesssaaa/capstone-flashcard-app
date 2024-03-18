import GlobalStyle from "../styles";
import { nanoid } from "nanoid";

import Layout from "../components/Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const {
    data: cards,
    isLoading: isLoadingCards,
    mutate: mutateCards,
  } = useSWR("/api/cards", fetcher);
  const {
    data: collections,
    isLoading: isLoadingCollections,
    mutate: mutateCollections,
  } = useSWR("/api/collections", fetcher);

  if (isLoadingCards) {
    return <h1>Is loading...</h1>;
  }

  if (!cards) {
    return;
  }

  function getCard(id) {
    return cards.find((card) => card.id === id);
  }

  async function addCard(card) {
    const response = await fetch("/api/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });
    if (response.ok) {
      mutateCards();
    }

    toast("Karte erfolgreich hinzugefügt");
  }

  async function updateCard(card) {
    const response = await fetch(`/api/cards/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });

    if (response.ok) {
      mutateCards();
    }
  }

  async function editCard(card) {
    updateCard(card);
    toast("Karte erfolgreich bearbeitet");
  }

  async function deleteCard(id) {
    const response = await fetch(`/api/cards/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutateCards();
      toast("Karte wurde gelöscht");
    }
  }

  if (isLoadingCollections) {
    return <h1>Is loading...</h1>;
  }

  if (!collections) {
    return;
  }

  async function deleteCollection(id) {
    const response = await fetch(`/api/collections/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutateCollections();
      toast("Kartenstapel wurde gelöscht");
    }
  }

  if (isLoadingCollections) {
    return <h1>Is loading...</h1>;
  }

  if (!collections) {
    return;
  }

  function getCollection(id) {
    return collections.find((collection) => collection.id === id);
  }

  async function addCollection(collection) {
    const response = await fetch("/api/collections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collection),
    });
    if (response.ok) {
      mutateCollections();
      toast("Kartenstapel erfolgreich hinzugefügt");
      return await response.json();
    }
  }

  function handleToggleMastered(id) {
    cards.forEach((card) => {
      if (card.id === id) {
        card.isMastered = !card.isMastered;
        updateCard(card);
        if (!card.isMastered) {
          toast("Neue Runde");
        } else {
          toast("Super🤩");
        }
      }
    });
  }
  return (
    <>
      <Layout>
        <GlobalStyle />

        <Component
          cards={cards}
          collections={collections}
          getCard={getCard}
          addCard={addCard}
          editCard={editCard}
          deleteCard={deleteCard}
          onToggle={handleToggleMastered}
          getCollection={getCollection}
          addCollection={addCollection}
          deleteCollection={deleteCollection}
          {...pageProps}
        />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
        />
      </Layout>
    </>
  );
}
