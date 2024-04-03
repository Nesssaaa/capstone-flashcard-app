import MenuComponent from "../MenuComponent/MenuComponent.js";
import {
  StyledHeader,
  IconWrapper,
  StyledSpan,
  StyledLink,
} from "./Header.styled.js";
import Image from "next/image.js";

export default function Header() {
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
          <MenuComponent />
        </StyledSpan>
      </StyledHeader>
    </>
  );
}
