import {
  StyledMenu,
  IconWrapper,
  MenuList,
  StyledMenuItem,
  StyledLink,
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
          <MenuButton onClick={toggleMenu}>
            <IconWrapper>
              {/* <MdOutlineMenu /> */}
              {isOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
            </IconWrapper>
          </MenuButton>
        }
      >
        {isOpen && (
          <StyledMenu>
            <MenuList>
              <StyledMenuItem>
                <StyledLink href="/">
                  <IconWrapper>
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
