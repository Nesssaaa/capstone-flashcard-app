import CardButton from "../CardButton/CardButton";
import { useRouter } from "next/router";
import { StyledButtonNavBar } from "./ButtonNavBar.styled";
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

  // function onToggle(id) {
  //   // event.preventDefault();
  //   // event.stopPropagation();
  //   toggleMastered(id);
  // }

  return (
    <StyledButtonNavBar>
      <CardButton onClick={onEdit}>Bearbeiten</CardButton>
      <CardButton onClick={handleDelete}>Löschen</CardButton>
      <CardButton onClick={() => onToggle(id)}>
        {isMastered ? "wiederholen" : "geschafft"}
      </CardButton>
    </StyledButtonNavBar>
  );
}
