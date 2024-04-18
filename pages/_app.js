import Head from "next/head";
import GlobalStyle from "../styles";
import Layout from "../components/Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles";

import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState("darkTheme", {
    defaultValue: false,
  });

  const theme = isDarkMode ? darkTheme : lightTheme;

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

  if (isLoadingCards || isLoadingCollections) {
    return <LoadingSpinner />;
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
      toast("Karte erfolgreich hinzugefügt");
      mutateCards();
    } else {
      toast.error(`Fehler beim Speichern der Karte: ${response.statusText}`);
    }
    return response.ok;
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
    } else {
      toast.error(`Fehler beim Speichern der Karte: ${response.statusText}`);
    }
    return response.ok;
  }

  async function editCard(card) {
    const success = await updateCard(card);
    if (success) {
      toast("Karte erfolgreich bearbeitet");
    }
    return success;
  }

  async function resetCard(card) {
    await updateCard({ ...card, level: 1 });
    toast("Das Kartenlevel wurde auf den Wert 1 zurückgesetzt");
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

  async function updateCollection(collection) {
    const response = await fetch(`/api/collections/${collection.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collection),
    });

    if (response.ok) {
      console.log("updated", collection);
      mutateCollections();
    }
  }

  async function editCollection(collection) {
    updateCollection(collection);
    toast("Kartenstapel erfolgreich bearbeitet");
  }

  async function deleteCollection(id) {
    const response = await fetch(`/api/collections/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await mutateCollections();
      await mutateCards();
      toast("Kartenstapel wurde gelöscht");
    }
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
        if (!card.isMastered) {
          card.level = 1;
        }
        updateCard(card);
        if (!card.isMastered) {
          toast("Neue Runde");
        } else {
          toast("Super🤩");
        }
      }
    });
  }

  const disableLayout = pageProps.disableLayout || false;

  // Wenn disableLayout true ist, render Layout nicht
  if (disableLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider theme={{ func: theme }}>
          <Head>
            <title>SchlauFuchs</title>
          </Head>
          <Layout setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}>
            <GlobalStyle />

            <Component
              cards={cards}
              collections={collections}
              getCard={getCard}
              addCard={addCard}
              updateCard={updateCard}
              editCard={editCard}
              deleteCard={deleteCard}
              onToggle={handleToggleMastered}
              getCollection={getCollection}
              addCollection={addCollection}
              deleteCollection={deleteCollection}
              editCollection={editCollection}
              resetCard={resetCard}
              session={session}
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
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
