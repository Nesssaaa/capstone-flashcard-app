import Head from "next/head";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, mutate } = useSWR("/api/cards", fetcher);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!data) {
    console.log(data);
    return;
  }

  function getCard(id) {
    return data.find((card) => card.id === id);
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

  async function updateCard(card) {
    const response = await fetch(`/api/cards/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });

    if (response.ok) {
      mutate();
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
      mutate();
    }
    toast("Karte wurde gelöscht");
  }

  function handleToggleMastered(id) {
    data.forEach((card) => {
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
  console.log(data);
  return (
    <>
      <Head>
        <title>SchlauFuchs</title>
      </Head>
      <Layout>
        <GlobalStyle />

        <Component
          cards={data}
          getCard={getCard}
          addCard={addCard}
          editCard={editCard}
          deleteCard={deleteCard}
          onToggle={handleToggleMastered}
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
