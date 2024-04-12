import {
  StyledMenu,
  IconWrapper,
  MenuList,
  StyledMenuItem,
  StyledMenuButton,
  MainMenu,
} from "./MenuComponent.styled";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MdOutlineClose, MdOutlineMenu, MdLogout } from "react-icons/md";
import { PiCards } from "react-icons/pi";
import { BsCollectionFill } from "react-icons/bs";
import { MenuButton } from "@szhsin/react-menu";
import { signOut } from "next-auth/react";
import router from "next/router";
import LoginButton from "../LoginButton/LoginButton";
import { useHistory } from "react-router-dom";

export default function MenuComponent() {
  // const history = useHistory();
  function handleSignOut() {
    router.push("/");
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
            <StyledMenuItem onClick={handleSignOut} /*href="/api/auth/signin"*/>
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
