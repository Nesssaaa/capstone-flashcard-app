import GlobalStyle from "../styles";
import initialFlashCards from "../lib.data.json";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", { defaultValue: [] });

  function getCard(id) {
    return cards.find((card) => card.id == id);
  }
  console.log(getCard());

  function addCard(newCardData) {
    const newCards = [{ id: nanoid(), ...newCardData }, ...cards];
    setCards(newCards);
  }

  function editCard(card) {
    //prev u x noch sinnvoller benennen
    setCards((prev) =>
      prev.map((x) => (x.id === card.id ? { ...x, ...card } : x))
    );
  }

  return (
    <>
      <Layout>
        <GlobalStyle />

        <Component
          cards={[...cards, ...initialFlashCards]}
          getCard={getCard}
          // setCards={setCards}
          addCard={addCard}
          editCard={editCard}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
