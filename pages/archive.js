import Link from "next/link";
export default function ArchivesPage({ cards = [] }) {
  const masteredCards = cards.filter((card) => card.isMastered);
  return (
    <>
      <h1>Archiv - schon geschafft!!</h1>
      <ul>
        {masteredCards.map((card) => (
          <li key={card.id}>
            Karten
            {/* <Link href={`/musicals/${musical.id}`}>
              {musical.title} - Click here for more Infos...
            </Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}
