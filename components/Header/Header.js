import MenuComponent from "../MenuComponent/MenuComponent.js";
import { StyledHeader, IconWrapper, StyledSpan } from "./Header.styled.js";

export default function Header() {
  return (
    <>
      <StyledHeader>
        SchlauFuchs <IconWrapper> 🦊</IconWrapper>
        <StyledSpan>
          <MenuComponent />
        </StyledSpan>
      </StyledHeader>
    </>
  );
}
