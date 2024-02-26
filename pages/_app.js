import GlobalStyle from "../styles";
import initialFlashCards from "../lib.data.json";

export default function App({ Component, pageProps }) {
  const initialData = initialFlashCards;
  console.log(initialData);
  return (
    <>
      <GlobalStyle />
      <Component initialData={initialData} {...pageProps} />
    </>
  );
}
