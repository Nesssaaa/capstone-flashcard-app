import { StyledHeader, IconWrapper } from "./Header.styled.js";
import Menu from "../Menu/Menu";

export default function Header() {
  return (
    <StyledHeader>
      {" "}
      SchlauFuchs <IconWrapper> 🦊</IconWrapper>
      <Menu />
    </StyledHeader>
  );
}
