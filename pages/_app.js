import GlobalStyle from "../styles";
import initialFlashCards from "../lib.data.json";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }) {
  const initialData = initialFlashCards;
  console.log(initialData);
  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
        <Component initialData={initialData} {...pageProps} />
      </main>
    </>
  );
}
