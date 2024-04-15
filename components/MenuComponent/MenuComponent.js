import {
  StyledMenu,
  IconWrapper,
  MenuList,
  StyledMenuItem,
  StyledMenuButton,
  MainMenu,
  StyledSubMenu,
  StyledMenuDivider,
} from "./MenuComponent.styled";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MdOutlineClose, MdOutlineMenu, MdLogout } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { PiCards } from "react-icons/pi";
import { BsCollectionFill } from "react-icons/bs";
import { useSession, signOut } from "next-auth/react";
import {
  MenuDivider,
  MenuItem,
  MenuRadioGroup,
  SubMenu,
} from "@szhsin/react-menu";
export default function MenuComponent() {
  const { data: session } = useSession();
  function handleSignOut() {
    if (session) {
      signOut({ callbackUrl: "/" });
    }
  }

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
            <StyledMenuItem href="/collections">
              <IconWrapper $size="1.3rem">
                <BsCollectionFill /> &nbsp; Meine Kartenstapel
              </IconWrapper>
            </StyledMenuItem>
            <StyledMenuItem href="/allCards">
              <IconWrapper $size="1.3rem">
                <PiCards />
                &nbsp; Zu all meinen Karten
              </IconWrapper>
            </StyledMenuItem>
            <StyledMenuItem>
              <IconWrapper $size="1.3rem">
                <VscColorMode />
                &nbsp; Farbwechsel
              </IconWrapper>

              <StyledSubMenu>
                <MenuRadioGroup>
                  <MenuItem
                    style={{ color: "var(--color-fox)" }}
                    type="radio"
                    value="light"
                  >
                    &nbsp; Hell
                  </MenuItem>
                  <MenuItem
                    style={{ color: "var(--color-background-4)" }}
                    type="radio"
                    value="dark"
                  >
                    &nbsp; Dunkel
                  </MenuItem>
                </MenuRadioGroup>
              </StyledSubMenu>
            </StyledMenuItem>
            <StyledMenuDivider />
            <StyledMenuItem onClick={handleSignOut}>
              <IconWrapper $size="1.3rem">
                <MdLogout />
                &nbsp; Abmelden
              </IconWrapper>
            </StyledMenuItem>
          </MenuList>
        </StyledMenu>
      </MainMenu>
    </>
  );
}
