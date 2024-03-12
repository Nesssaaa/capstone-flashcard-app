import { StyledMenu, MenuItems, IconWrapper } from "./Menu.styled";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineClose, MdOutlineMenu, MdHome } from "react-icons/md";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledMenu>
      <button onClick={toggleMenu}>
        {isOpen ? (
          <IconWrapper>
            <MdOutlineClose />
          </IconWrapper>
        ) : (
          <IconWrapper>
            <MdOutlineMenu />
          </IconWrapper>
        )}
      </button>
      {isOpen && (
        <MenuItems>
          <Link href="/">
            <MdHome />
            Hauptsseite
          </Link>
        </MenuItems>
      )}
    </StyledMenu>
  );
}
