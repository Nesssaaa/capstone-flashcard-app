import MenuComponent from "../MenuComponent/MenuComponent.js";
import {
  StyledHeader,
  IconWrapper,
  StyledSpan,
  StyledLink,
} from "./Header.styled.js";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledLink href="/collections">
          SchlauFuchs <IconWrapper> 🦊</IconWrapper>
        </StyledLink>

        <StyledSpan>
          <MenuComponent />
        </StyledSpan>
      </StyledHeader>
    </>
  );
}
