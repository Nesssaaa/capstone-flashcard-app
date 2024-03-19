import { useState } from "react";
import useCount from "@/components/quizPositionCounter.js";
import { getRandomCards } from "@/utils.js";
import CardContainer from "@/components/CardContainer/CardContainer.js";
import { useRouter } from "next/router";

export default function QuizPage({
  cards,
  getCollection,
  onToggle,
  deleteCard,
}) {
  const router = useRouter();
  const collection = getCollection(router.query.id);
  const filteredCards = collection
    ? cards
        .filter((card) => card.collection === collection.id)
        .filter((card) => card.isMastered === false)
    : [];

  const [quizCards, setQuizCards] = useState(getRandomCards(filteredCards, 15));
  const { countPosition, increment, decrement } = useCount(0);
  console.log(countPosition, quizCards);

  const card = quizCards[countPosition];

  return (
    <div>
      <CardContainer
        question={card.question}
        answer={card.answer}
        id={card.id}
        deleteCard={deleteCard}
        onToggle={onToggle}
        isMastered={card.isMastered}
      ></CardContainer>
      {countPosition > 0 && <button onClick={decrement}>zurück</button>}
      {countPosition < quizCards.length - 1 && (
        <button onClick={increment}>weiter</button>
      )}
      Fortschritt: {countPosition + 1} von {quizCards.length}
    </div>
  );
}
