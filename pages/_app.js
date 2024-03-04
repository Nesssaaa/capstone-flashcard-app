import GlobalStyle from "../styles";
import initialFlashCards from "../lib.data.json";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: initialFlashCards,
  });

  function addCard(newCardData) {
    const newCards = [{ id: nanoid(), ...newCardData }, ...cards];
    setCards(newCards);
  }
  function deleteCard(id) {
    setCards((cards) => cards.filter((card) => card.id !== id));
  }

  return (
    <>
      <Layout>
        <GlobalStyle />

        <Component
          cards={cards}
          setCards={setCards}
          addCard={addCard}
          deleteCard={deleteCard}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
