import {
  StyledMenu,
  IconWrapper,
  MenuList,
  StyledMenuItem,
  StyledMenuButton,
  MainMenu,
  StyledSubMenu,
  StyledMenuDivider,
  StyledLabel,
} from "./MenuComponent.styled";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MdOutlineClose, MdOutlineMenu, MdLogout } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { PiCards } from "react-icons/pi";
import { BsCollectionFill } from "react-icons/bs";
import { useSession, signOut } from "next-auth/react";
import { MenuItem, MenuRadioGroup } from "@szhsin/react-menu";

export default function MenuComponent({ setIsDarkMode }) {
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
          <StyledMenuButton aria-label="Hier kannst du das Menu öffnen und schließen">
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
                &nbsp;&nbsp;
                <MdOutlineClose />
                &nbsp; Schließen
              </IconWrapper>
            </StyledMenuItem>
            <StyledMenuItem
              aria-label="Hier gelangst du zum Kartenstapel"
              href="/collections"
            >
              <IconWrapper $size="1.3rem">
                &nbsp;&nbsp;
                <BsCollectionFill /> &nbsp; Meine Kartenstapel
              </IconWrapper>
            </StyledMenuItem>
            <StyledMenuItem
              aria-label="Hier gelangst du zu einer Übersicht, die alle deine Karten anzeigt"
              href="/allCards"
            >
              <IconWrapper $size="1.3rem">
                &nbsp;&nbsp;
                <PiCards />
                &nbsp; Zu all meinen Karten
              </IconWrapper>
            </StyledMenuItem>

            <StyledSubMenu
              label={
                <StyledLabel aria-label="Hier kannst du den Farbmodus wechseln">
                  <IconWrapper $size="1.3rem">
                    <VscColorMode /> &nbsp; Farbwechsel
                  </IconWrapper>
                </StyledLabel>
              }
            >
              <MenuRadioGroup>
                <MenuItem
                  aria-label="Hier kannst du den hellen Farbmodus auswaehlen"
                  style={{
                    color: "var(--color-fox)",
                  }}
                  type="radio"
                  value="light"
                  onClick={() => setIsDarkMode(false)}
                >
                  &nbsp; Hell
                </MenuItem>
                <MenuItem
                  aria-label="Hier kannst du den dunkten Farbmodus auswaehlen"
                  style={{ color: "var(--color-background-4)" }}
                  type="radio"
                  value="dark"
                  onClick={() => setIsDarkMode(true)}
                >
                  &nbsp; Dunkel
                </MenuItem>
              </MenuRadioGroup>
            </StyledSubMenu>

            <StyledMenuDivider />
            <StyledMenuItem
              aria-label="Hier kannst du dich abmelden"
              onClick={handleSignOut}
            >
              <IconWrapper $size="1.3rem">
                &nbsp;&nbsp; <MdLogout />
                &nbsp; Abmelden
              </IconWrapper>
            </StyledMenuItem>
          </MenuList>
        </StyledMenu>
      </MainMenu>
    </>
  );
}
