import GlobalStyle from "../styles";
import initialFlashCards from "../lib.data.json";

import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  const initialData = initialFlashCards;
  console.log(initialData);
  return (
    <>
      <Layout>
        <GlobalStyle />

        <Component initialData={initialData} {...pageProps} />
      </Layout>
    </>
  );
}
