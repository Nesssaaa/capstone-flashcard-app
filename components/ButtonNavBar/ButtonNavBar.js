import CardButton from "../CardButton/CardButton";
import { useRouter } from "next/router";
import { StyledButtonNavBar } from "./ButtonNavBar.styled";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
// import { ToastContainer, toast } from "react-toastify";

export default function ButtonNavBar({
  id,
  deleteCard,
  toggleMastered,
  isMastered,
}) {
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

  function handleToggle(event) {
    event.preventDefault();
    event.stopPropagation();
    toggleMastered(id);
    // if (!isMastered) {
    //   toast("Neue Runde");
    // } else {
    //   toast("Super🤩");
    // }
  }

  return (
    <StyledButtonNavBar>
      <CardButton onClick={onEdit}>Bearbeiten</CardButton>
      <CardButton onClick={handleDelete}>Löschen</CardButton>
      <CardButton onClick={handleToggle}>
        {isMastered ? "wiederholen" : "geschafft"}
      </CardButton>
    </StyledButtonNavBar>
  );
}
