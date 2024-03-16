import GlobalStyle from "../styles";
import initialCollections from "../lib.collections.json";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

import Layout from "../components/Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data: cards, isLoading, mutate } = useSWR("/api/cards", fetcher);
  const router = useRouter();
  const [collections, setCollections] = useLocalStorageState("collections", {
    defaultValue: initialCollections,
  });

  if (isLoading) {
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
      mutate();
    }

    toast("Karte erfolgreich hinzugefügt");
  }

  async function editCard(card) {
    const response = await fetch(`/api/cards/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });

    if (response.ok) {
      mutate();
      toast("Karte erfolgreich bearbeitet");
    }
  }

  async function deleteCard(id) {
    console.log("Ich soll folgende Karte loeschen", id);
    const response = await fetch(`/api/cards/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate();
      toast("Karte wurde gelöscht");
    }
  }

  function getCollection(id) {
    return collections.find((collection) => collection.id === id);
  }

  function addCollection(data) {
    const newCollections = [{ id: nanoid(), ...data }, ...collections];
    setCollections(newCollections);
    toast("Kartenstapel erfolgreich hinzugefügt");
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
