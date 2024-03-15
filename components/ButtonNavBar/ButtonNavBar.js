import CardButton from "../CardButton/CardButton";
import { IconWrapper, StyledButtonNavBar } from "./ButtonNavBar.styled";
import { FaCheck } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

export default function ButtonNavBar({ id, onToggle, isMastered }) {
  return (
    <StyledButtonNavBar>
      <CardButton onClick={() => onToggle(id)}>
        <IconWrapper>{isMastered ? <FaRepeat /> : <FaCheck />}</IconWrapper>
      </CardButton>
    </StyledButtonNavBar>
  );
}
