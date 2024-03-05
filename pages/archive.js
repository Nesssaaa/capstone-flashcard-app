import CardList from "@/components/CardList/CardList";

export default function ArchivesPage({ cards = [], toggleMasteredCards }) {
  const masteredCards = cards.filter((card) => card.isMastered);
  console.log(masteredCards);
  return (
    <>
      <h1>Archiv - schon geschafft!!</h1>
      {!masteredCards.length ? (
        <p>Dein Archiv ist noch leer.</p>
      ) : (
        <>
          <CardList cards={masteredCards} onToggle={toggleMasteredCards} />
        </>
      )}
    </>
  );
}
