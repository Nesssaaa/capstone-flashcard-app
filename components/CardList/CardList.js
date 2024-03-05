import ButtonNavBar from "../ButtonNavBar/ButtonNavBar";
import CardContainer from "../CardContainer/CardContainer";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function CardList({ cards, deleteCard }) {
  function handleDelete(event) {
    confirmAlert({
      title: "Karte löschen?",
      message: "Möchtest du diese Karte wirklich löschen?",
      buttons: [
        {
          label: "Ja, bitte.",
          onClick: () => {
            const id = event.target.value;
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
      {cards.map((card) => (
        <div key={card.id}>
          <CardContainer question={card.question} answer={card.answer} />
          <button value={card.id} onClick={handleDelete}>
            Karte löschen!
          </button>
        </div>
      ))}
    </>
  );
}
