import Header from "../Header/Header";
// import Menu from "../Menu/MenuComponent";
import Navigation from "../Navigation/Navigation";
import { StyledMain } from "./Layout.styled";

export default function Layout({ children }) {
  return (
    <>
      {/* <Menu /> */}
      <Header />
      <StyledMain>{children}</StyledMain>
      <Navigation />
    </>
  );
}
