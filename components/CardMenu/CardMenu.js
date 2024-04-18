import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { Menu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MdDeleteForever, MdEdit, MdOutlineClose } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxReset } from "react-icons/rx";
import {
  StyledMenuButton,
  IconWrapper,
  StyledMenu,
  StyledMenuItem,
} from "./CardMenu.styled";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function CardMenu({
  id,
  deleteCard,
  handleResetCard,
  isMastered,
  readText,
}) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const speechSynthesisUtterance = new SpeechSynthesisUtterance();

  function handleReadText() {
    speechSynthesisUtterance.text = readText;
    speechSynthesisUtterance.lang = "de-DE";
    window.speechSynthesis.speak(speechSynthesisUtterance);
  }

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

  function handleResetCards() {
    handleResetCard(id);
    setIsMenuOpen(false);
  }

  function onEdit() {
    router.push(`/cards/${id}/edit?ismastered=${isMastered}`);
    setIsMenuOpen(false);
  }

  function handleDelete(event) {
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
    setIsMenuOpen(false);
  }

  return (
    <Menu
      menuButton={
        <StyledMenuButton onClick={handleMenuClick}>
          <IconWrapper>
            {isMenuOpen ? <MdOutlineClose /> : <BsThreeDots />}
          </IconWrapper>
        </StyledMenuButton>
      }
      transition
      onClick={(event) => event.stopPropagation()}
    >
      <StyledMenu ref={menuRef} onClick={(event) => event.stopPropagation()}>
        <StyledMenuItem onClick={onEdit}>
          <MdEdit /> &nbsp; Karte bearbeiten
        </StyledMenuItem>
        <StyledMenuItem onClick={handleDelete}>
          <MdDeleteForever />
          &nbsp; Karte löschen
        </StyledMenuItem>
        <StyledMenuItem onClick={handleResetCards}>
          <RxReset />
          &nbsp; Kartenlevel zurücksetzen
        </StyledMenuItem>
        <StyledMenuItem onClick={handleReadText}>
          <MdEdit /> &nbsp; Text vorlesen
        </StyledMenuItem>
      </StyledMenu>
    </Menu>
  );
}
