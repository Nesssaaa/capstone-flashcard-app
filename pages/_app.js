import GlobalStyle from "../styles";
import { nanoid } from "nanoid";

import Layout from "@/components/Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading } = useSWR("/api/cards", fetcher);

  if (isLoading) {
    return <h1>Is loading...</h1>;
  }
  if (!data) {
    return;
  }

  function getCard(id) {
    return data.find((card) => card.id === id);
  }

  function addCard(data) {
    const newCards = [{ id: nanoid(), ...data, isMastered: false }, ...data];
    setCards(newCards);
    toast("Karte erfolgreich hinzugefügt");
  }

  function editCard(data) {
    setCards((data) =>
      cards.map((card) => (card.id === data.id ? { ...card, ...data } : card))
    );
    toast("Karte erfolgreich bearbeitet");
  }

  function deleteCard(id) {
    setCards((data) => data.filter((card) => card.id !== id));
  }

  function handleToggleMastered(id) {
    setCards((data) =>
      data.map((card) => {
        if (card.id === id) {
          card.isMastered = !card.isMastered;

          if (!card.isMastered) {
            toast("Neue Runde");
          } else {
            toast("Super🤩");
          }
        }
        return card;
      })
    );
  }

  return (
    <>
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
