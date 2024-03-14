import {
  StyledMenu,
  IconWrapper,
  MenuList,
  StyledMenuItem,
  StyledLink,
  StyledMenuButton,
  MainMenu,
} from "./MenuComponent.styled";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MdOutlineClose, MdOutlineMenu, MdHome } from "react-icons/md";

export default function MenuComponent() {
  return (
    <>
      <MainMenu
        menuButton={
          <StyledMenuButton>
            <IconWrapper>
              <MdOutlineMenu />
            </IconWrapper>
          </StyledMenuButton>
        }
        transition
      >
        <StyledMenu>
          <MenuList>
            <StyledMenuItem>
              <IconWrapper $size="1.3rem">
                <MdOutlineClose />
                &nbsp; Schließen
              </IconWrapper>
            </StyledMenuItem>
            <StyledMenuItem href="/">
              <IconWrapper $size="1.3rem">
                <MdHome /> &nbsp; Hauptseite
              </IconWrapper>
            </StyledMenuItem>
          </MenuList>
        </StyledMenu>
      </MainMenu>
    </>
  );
}
