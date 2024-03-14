import "@szhsin/react-menu/dist/core.css";
import { MenuButton, MenuItem, Menu } from "@szhsin/react-menu";
import Link from "next/link";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { StyledMenuButton, IconWrapper } from "./CardMenu.styled";

export default function CardMenu() {
  function handleMenuClick(event) {
    event.stopPropagation();
  }

  return (
    <>
      <Menu
        menuButton={
          <StyledMenuButton onClick={handleMenuClick}>
            <IconWrapper>
              <BsThreeDots />
            </IconWrapper>
          </StyledMenuButton>
        }
      >
        <div onClick={handleMenuClick}>
          <MenuItem>
            <MdEdit /> &nbsp; Karte bearbeiten
          </MenuItem>
          <MenuItem>
            <MdDeleteForever />
            &nbsp; Karte löschen
          </MenuItem>
        </div>
      </Menu>
    </>
  );
}
