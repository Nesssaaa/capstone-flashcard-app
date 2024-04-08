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

export default function CardContainer({
  question,
  answer,
  id,
  deleteCard,
  onToggle,
  isMastered,
  level,
  showArchiveButton = true,
  hidden,
  toggleCardDirection,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  // const [hidden, setHidden] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  // function toggleCardDirection(event) {
  //   event.stopPropagation();
  //   setHidden(!hidden);
  // }

  function stopMenuPropagation(event) {
    event.stopPropagation();
  }

  return (
    <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
      <StyledCardContainerQuestion onClick={flipCard} $level={level}>
        <CardMenu
          onClick={stopMenuPropagation}
          id={id}
          deleteCard={deleteCard}
          isMastered={isMastered}
        />
        <StyledTextShow
          readOnly
          textLength={hidden ? answer : question}
          value={hidden ? answer : question}
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

      <StyledCardContainerAnswer
        onClick={flipCard}
        $level={level}
        isMastered={isMastered}
      >
        <CardMenu onClick={stopMenuPropagation} />

        <StyledTextShow
          readOnly
          textLength={hidden ? question : answer}
          value={hidden ? question : answer}
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
        <button
          onClick={(event) => {
            stopMenuPropagation(event);
            toggleCardDirection(event);
          }}
        >
          Richtung wechseln
        </button>
      </StyledCardContainerAnswer>
    </ReactCardFlip>
  );
}
