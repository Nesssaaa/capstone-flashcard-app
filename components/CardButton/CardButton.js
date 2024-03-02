import { StyledCardButton } from "./CardButton.styled";
import Link from "next/link";

export default function CardButton({ children, onClick }) {
  return (
    <StyledCardButton onClick={onClick} type="button">
      {children}
    </StyledCardButton>
  );
}
