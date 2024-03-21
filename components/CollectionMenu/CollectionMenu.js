import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { Menu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MdDeleteForever, MdEdit, MdOutlineClose } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import {
  StyledMenuButton,
  IconWrapper,
  StyledMenu,
  StyledMenuItem,
  StyledTitle,
  StyledLabel,

} from "./CollectionMenu.styled";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function CollectionMenu({ id, deleteCollection }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleMenuClick(event) {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }

  function onEdit() {

    router.push(`/collections/${id}/edit`);
    setIsMenuOpen(false);
  }

  async function handleDelete() {
    const confirmFirst = await new Promise((resolve) => {
      confirmAlert({
        title: "Kartenstapel löschen?",
        message: "Möchtest du den gesamten Stapel wirklich löschen?",
        buttons: [
          {
            label: "Ja, bitte.",
            onClick: () => resolve(true),
          },
          {
            label: "Nein, danke.",
            onClick: () => resolve(false),
          },
        ],
      });
    });

    if (confirmFirst) {
      const confirmSecond = await new Promise((resolve) => {
        confirmAlert({

          title: "Endgültig löschen",
          message:
            "Bist du dir sicher, dass du den gesamten Kartenstapel endgültig löschen möchtest?",
          title: <StyledTitle>Endgültig löschen</StyledTitle>,
          message:
            "Bist du dir ganz sicher? ALLE KARTEN dieses Kartenstapels werden gelöscht!!",

          buttons: [
            {
              label: "Ja, endgültig löschen.",
              onClick: () => resolve(true),
            },
            {

              label: "Nein, abbrechen.",

              label: <StyledLabel>NEIN, abbrechen.</StyledLabel>,

              onClick: () => resolve(false),
            },
          ],
        });
      });

      if (confirmSecond) {
        deleteCollection(id);
      }
    }

    setIsMenuOpen(false);
  }

  return (
    <Menu
      isOpen={isMenuOpen}
      menuButton={
        <StyledMenuButton onClick={handleMenuClick}>
          <IconWrapper>
            {isMenuOpen ? <MdOutlineClose /> : <BsThreeDots />}
          </IconWrapper>
        </StyledMenuButton>
      }
      transition
    >
      <StyledMenu ref={menuRef}>

        <StyledMenuItem onClick={onEdit}>
          <MdEdit /> &nbsp; Kartenstapel bearbeiten
        </StyledMenuItem>


        <StyledMenuItem onClick={handleDelete}>
          <MdDeleteForever />
          &nbsp; Kartenstapel löschen
        </StyledMenuItem>
      </StyledMenu>
    </Menu>
  );
}
