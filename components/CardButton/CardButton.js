import { StyledCardButton } from "./CardButton.styled";

export default function CardButton({ children, onClick }) {
  return (
    <StyledCardButton onClick={onClick} type="button">
      {children}
    </StyledCardButton>
  );
}
