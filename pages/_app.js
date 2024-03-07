import GlobalStyle from "../styles";
import initialFlashCards from "../lib.data.json";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

import Layout from "@/components/Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: initialFlashCards,
  });

  function getCard(id) {
    return cards.find((card) => card.id === id);
  }

  function addCard(data) {
    const newCards = [{ id: nanoid(), ...data, isMastered: false }, ...cards];
    setCards(newCards);
    toast("Karte erfolgreich hinzugefügt");
  }

  function editCard(data) {
    setCards((cards) =>
      cards.map((card) => (card.id === data.id ? { ...card, ...data } : card))
    );
    toast("Karte erfolgreich bearbeitet");
  }

  function deleteCard(id) {
    setCards((cards) => cards.filter((card) => card.id !== id));
  }

  function handleToggleMastered(id) {
    setCards((cards) =>
      cards.map((card) => {
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
          cards={cards}
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
