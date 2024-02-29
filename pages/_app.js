import GlobalStyle from "../styles";
import initialFlashCards from "../lib.data.json";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", { defaultValue: [] });
  const initialData = initialFlashCards;
  console.log("Klappt", cards);

  function addCard(newCardData) {
    const newCards = [...cards, { id: nanoid(), ...newCardData }];
    setCards(newCards);
  }

  return (
    <>
      <Layout>
        <GlobalStyle />

        <Component
          initialData={initialData}
          cards={cards}
          setCards={setCards}
          addCard={addCard}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
