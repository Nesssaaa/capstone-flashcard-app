import CardContainer from "../CardContainer/CardContainer";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function CardList({ initialData, cards, deleteCard }) {
  function handleDelete(event) {
    confirmAlert({
      title: "Karte löschen?",
      message: "Möchtest du diese Karte wirklich löschen?",
      buttons: [
        {
          label: "Ja",
          onClick: () => {
            const id = event.target.value;
            deleteCard(id);
          },
        },
        {
          label: "Nein",
        },
      ],
    });
  }

  return (
    <>
      {cards
        ? cards.map((newCard) => (
            <div key={newCard.id}>
              <CardContainer
                question={newCard.question}
                answer={newCard.answer}
              />
              <button value={newCard.id} onClick={handleDelete}>
                Karte löschen!
              </button>
            </div>
          ))
        : null}
      {initialData.map((card) => (
        <div key={card.id}>
          <CardContainer question={card.question} answer={card.answer} />
          {/* button bringt id mit und sendet mit dem Clickevent id an Funktion handleDelete; id bekomme ich, indem ich den Value aus dem Event auslese */}
          <button value={card.id} onClick={handleDelete}>
            Karte löschen!
          </button>
        </div>
      ))}
    </>
  );
}
