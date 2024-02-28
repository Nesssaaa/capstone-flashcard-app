import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { StyledMain } from "./Layout.styled";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Navigation />
    </>
  );
}
