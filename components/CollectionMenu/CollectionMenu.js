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
    setIsMenuOpen(!isMenuOpen);
  }

  //   function onEdit() {
  //     router.push(`/cards/${id}/edit`);
  //     setIsMenuOpen(false);
  //   }

  function handleDelete() {
    confirmAlert({
      title: "Kartenstapel löschen?",
      message: "Möchtest du den gesamten Stapel wirklich löschen?",
      buttons: [
        {
          label: "Ja, bitte.",
          onClick: () => {
            deleteCollection(id);
          },
        },
        {
          label: "Nein, danke.",
        },
      ],
    });
    setIsMenuOpen(false);
  }

  //   function handleDelete() {
  //     confirmAlert({
  //       title: "Kartenstapel löschen?",
  //       message: "Möchtest du den gesamten Stapel wirklich löschen?",
  //       buttons: [
  //         {
  //           label: "Ja, bitte.",
  //           onClick: () => {
  //             confirmAlert({
  //               title: "Doppelte Bestätigung",
  //               message:
  //                 "Bist du sicher, dass du den Kartenstapel endgültig löschen möchtest?",
  //               buttons: [
  //                 {
  //                   label: "Ja, endgültig löschen",
  //                   onClick: () => {
  //                     deleteCard(id);
  //                   },
  //                 },
  //                 {
  //                   label: "Abbrechen",
  //                 },
  //               ],
  //             });
  //           },
  //         },
  //         {
  //           label: "Nein, danke.",
  //         },
  //       ],
  //     });
  //     setIsMenuOpen(false);
  //   }

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
        <StyledMenuItem /*onClick={onEdit}*/>
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
