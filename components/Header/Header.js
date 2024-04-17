import MenuComponent from "../MenuComponent/MenuComponent";
import {
  StyledHeader,
  IconWrapper,
  StyledSpan,
  StyledLink,
} from "./Header.styled.js";
import Image from "next/image.js";

export default function Header({
  isDarkMode,
  // setDarkMode,
  // setLightMode,
  setIsDarkMode,
}) {
  return (
    <>
      <StyledHeader>
        <StyledLink href="/collections">
          SchlauFuchs{" "}
          <IconWrapper>
            {" "}
            <Image src="/fox.png" width={42} height={42} alt="fox-image" />
          </IconWrapper>
        </StyledLink>

        <StyledSpan>
          <MenuComponent
            isDarkMode={isDarkMode}
            // setDarkMode={setDarkMode}
            // setLightMode={setLightMode}
            setIsDarkMode={setIsDarkMode}
          />
        </StyledSpan>
      </StyledHeader>
    </>
  );
}
