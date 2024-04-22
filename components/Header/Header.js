import MenuComponent from "../MenuComponent/MenuComponent";
import {
  StyledHeader,
  IconWrapper,
  StyledSpan,
  StyledLink,
} from "./Header.styled.js";
import Image from "next/image.js";

export default function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <>
      <StyledHeader>
        <StyledLink
          aria-label="Hier gelangst du zum Kartenstapel"
          href="/collections"
        >
          SchlauFuchs{" "}
          <IconWrapper>
            {" "}
            <Image src="/fox.png" width={42} height={42} alt="fox-image" />
          </IconWrapper>
        </StyledLink>

        <StyledSpan>
          <MenuComponent
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </StyledSpan>
      </StyledHeader>
    </>
  );
}
