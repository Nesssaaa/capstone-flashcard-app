import CardContainer from "@/components/CardContainer/CardContainer";
import CardList from "@/components/CardList/CardList";

export default function ArchivesPage({
  cards = [],
  toggleMastered,
  deleteCard,
}) {
  const masteredCards = cards.filter((card) => card.isMastered);
  console.log(masteredCards);
  return (
    <>
      <h1>Archiv - schon geschafft!!</h1>
      {!masteredCards.length ? (
        <p>Dein Archiv ist noch leer.</p>
      ) : (
        <>
          <CardList
            cards={masteredCards}
            deleteCard={deleteCard}
            onToggle={toggleMastered}
          />
        </>
      )}
    </>
  );
}
// export default function ArchivesPage({ cards, deleteCard, toggleMastered }) {
//   return (
//     <>
//       <h1>Archiv - schon geschafft!!</h1>

//       {cards
//         .filter((card) => card.isMastered)
//         .map((card) => (
//           <div key={card.id}>
//             <CardContainer
//               question={card.question}
//               answer={card.answer}
//               deleteCard={deleteCard}
//               id={card.id}
//               toggleMastered={toggleMastered}
//               isMastered={card.isMastered}
//             />
//           </div>
//         ))}
//     </>
//   );
// }
