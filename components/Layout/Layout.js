import Header from "../Header/Header";

import { StyledMain } from "./Layout.styled";

export default function Layout({ children, isDarkMode, setIsDarkMode }) {
  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <StyledMain>{children}</StyledMain>
    </>
  );
}
