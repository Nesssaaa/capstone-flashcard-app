import CardButton from "../CardButton/CardButton";
import { useRouter } from "next/router";
import { IconWrapper, StyledButtonNavBar } from "./ButtonNavBar.styled";
import { MdDeleteForever, MdEdit, MdDone } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function ButtonNavBar({ id, deleteCard, onToggle, isMastered }) {
  const router = useRouter();

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
    <StyledButtonNavBar>
      <CardButton onClick={onEdit}>
        <IconWrapper>
          <MdEdit />
        </IconWrapper>
      </CardButton>

      <CardButton onClick={handleDelete}>
        <IconWrapper>
          <MdDeleteForever />
        </IconWrapper>
      </CardButton>

      <CardButton onClick={() => onToggle(id)}>
        <IconWrapper>{isMastered ? <FaRepeat /> : <FaCheck />}</IconWrapper>
      </CardButton>
    </StyledButtonNavBar>
  );
}
