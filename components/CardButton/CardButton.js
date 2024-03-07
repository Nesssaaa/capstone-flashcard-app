import { StyledCardButton } from "./CardButton.styled";
import { MdDeleteForever } from "react-icons/md";

export default function CardButton({ children, onClick }) {
  return (
    <StyledCardButton onClick={onClick} type="button">
      {children}
    </StyledCardButton>
  );
}
