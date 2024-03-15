import Header from "../Header/Header";

import { StyledMain } from "./Layout.styled";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}
