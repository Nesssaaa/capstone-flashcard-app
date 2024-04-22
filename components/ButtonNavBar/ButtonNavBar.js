import CardButton from "../CardButton/CardButton";
import { IconWrapper, StyledButtonNavBar } from "./ButtonNavBar.styled";
import { FaCheck } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

export default function ButtonNavBar({
  id,
  onToggle,
  isMastered,
  showArchiveButton = true,
}) {
  function handleClick(event) {
    event.stopPropagation();
    onToggle(id);
  }

  return (
    <StyledButtonNavBar>
      {showArchiveButton && (
        <CardButton
          aria-label="Durch Klicken auf das Häckchen gelangst du zum Archiv, durch Klicken auf die Wiederholungspfeile wird deine Lernkarte wieder dem aktiven Kartenstapel hinzugefügt"
          onClick={handleClick}
        >
          <IconWrapper>{isMastered ? <FaRepeat /> : <FaCheck />}</IconWrapper>
        </CardButton>
      )}
    </StyledButtonNavBar>
  );
}
