import CardContainer from "@/components/CardContainer/CardContainer";

import { StyledText, StyledPageName } from "../../components/Archive.styled";

export default function ArchivesPage({ cards, deleteCard, toggleMastered }) {
  return (
    <>
      <StyledPageName>Das kann ich schon!</StyledPageName>
      {!cards.filter((card) => card.isMastered).length ? (
        <StyledText>Dein Archiv ist noch leer.</StyledText>
      ) : (
        <>
          {cards
            .filter((card) => card.isMastered)
            .map((card) => (
              <div key={card.id}>
                <CardContainer
                  question={card.question}
                  answer={card.answer}
                  deleteCard={deleteCard}
                  id={card.id}
                  toggleMastered={toggleMastered}
                  isMastered={card.isMastered}
                />
              </div>
            ))}
        </>
      )}
    </>
  );
}
