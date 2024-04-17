import Header from "../Header/Header";

import { StyledMain } from "./Layout.styled";

export default function Layout({
  children,
  isDarkMode,
  // setDarkMode,
  // setLightMode,
  setIsDarkMode,
}) {
  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        // setDarkMode={setDarkMode}
        // setLightMode={setLightMode}
        setIsDarkMode={setIsDarkMode}
      />
      <StyledMain>{children}</StyledMain>
    </>
  );
}
