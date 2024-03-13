import {
  StyledMenu,
  IconWrapper,
  MenuList,
  StyledMenuItem,
  StyledLink,
  StyledMenuButton,
} from "./MenuComponent.styled";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineClose, MdOutlineMenu, MdHome } from "react-icons/md";

export default function MenuComponent() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Menu
        menuButton={
          <StyledMenuButton onClick={toggleMenu}>
            <IconWrapper>
              <MdOutlineMenu />
              {/* {isOpen ? <MdOutlineClose /> : <MdOutlineMenu />} */}
            </IconWrapper>
          </StyledMenuButton>
        }
      >
        {isOpen && (
          <StyledMenu>
            <MenuList>
              <StyledMenuItem>
                <IconWrapper size="1.3rem">
                  <MdOutlineClose />
                  &nbsp; Schließen
                </IconWrapper>
              </StyledMenuItem>
              <StyledMenuItem>
                <StyledLink href="/">
                  <IconWrapper size="1.3rem">
                    <MdHome /> &nbsp; Hauptsseite
                  </IconWrapper>
                </StyledLink>
              </StyledMenuItem>
            </MenuList>
          </StyledMenu>
        )}
      </Menu>
    </>
  );
}
