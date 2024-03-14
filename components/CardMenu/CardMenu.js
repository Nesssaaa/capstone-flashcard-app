import "@szhsin/react-menu/dist/core.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useRouter } from "next/router";
import { Menu } from "@szhsin/react-menu";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import {
  StyledMenuButton,
  IconWrapper,
  StyledMenu,
  StyledMenuItem,
} from "./CardMenu.styled";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function CardMenu({ id, deleteCard }) {
  const router = useRouter();
  function handleMenuClick(event) {
    event.stopPropagation();
  }

  function onEdit() {
    router.push(`/cards/${id}/edit`);
  }

  function handleDelete() {
    confirmAlert({
      title: "Karte löschen?",
      message: "Möchtest du diese Karte wirklich löschen?",
      buttons: [
        {
          label: "Ja, bitte.",
          onClick: () => {
            deleteCard(id);
          },
        },
        {
          label: "Nein, danke.",
        },
      ],
    });
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
        transition
      >
        <StyledMenu onClick={handleMenuClick}>
          <StyledMenuItem onClick={onEdit}>
            <MdEdit /> &nbsp; Karte bearbeiten
          </StyledMenuItem>
          <StyledMenuItem onClick={handleDelete}>
            <MdDeleteForever />
            &nbsp; Karte löschen
          </StyledMenuItem>
        </StyledMenu>
      </Menu>
    </>
  );
}
