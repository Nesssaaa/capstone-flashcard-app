import {
  StyledCardContainerAnswer,
  StyledCardContainerQuestion,
  StyledTextShow,
  IconWrapper,
} from "./CardContainer.styled";
import ReactCardFlip from "react-card-flip";
import { MdTouchApp } from "react-icons/md";
import { useState } from "react";
import ButtonNavBar from "../ButtonNavBar/ButtonNavBar";
import CardMenu from "../CardMenu/CardMenu";
import { useSession } from "next-auth/react";

export default function CardContainer({
  question,
  answer,
  id,
  deleteCard,
  onToggle,
  isMastered,
  level,
  showArchiveButton = true,
  resetCard,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data: session } = useSession();

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  function handleResetCard() {
    resetCard({
      id,
      question,
      answer,
      isMastered,
      level,
      user: session.user.id,
    });
  }

  function showCardMenu() {
    return (
      <CardMenu
        id={id}
        deleteCard={deleteCard}
        isMastered={isMastered}
        handleResetCard={handleResetCard}
      />
    );
  }

  return (
    <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
      <StyledCardContainerQuestion onClick={flipCard} $level={level}>
        {showCardMenu()}
        <StyledTextShow
          readOnly
          textLength={question}
          value={question}
        ></StyledTextShow>
        <IconWrapper>
          <MdTouchApp />
        </IconWrapper>
        {isMastered && (
          <ButtonNavBar
            id={id}
            deleteCard={deleteCard}
            onToggle={onToggle}
            isMastered={isMastered}
          />
        )}
      </StyledCardContainerQuestion>

      <StyledCardContainerAnswer onClick={flipCard} $level={level}>
        {showCardMenu()}

        <StyledTextShow
          readOnly
          textLength={answer}
          value={answer}
        ></StyledTextShow>
        <IconWrapper>
          <MdTouchApp />
        </IconWrapper>
        <ButtonNavBar
          id={id}
          deleteCard={deleteCard}
          onToggle={onToggle}
          isMastered={isMastered}
          showArchiveButton={showArchiveButton}
        />
      </StyledCardContainerAnswer>
    </ReactCardFlip>
  );
}
