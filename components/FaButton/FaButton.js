//FAB --> Floating Action Button

import { FAButton, IconWrapper } from "./FaButton.styled";

export default function FActionButton({ children, onClick }) {
  return (
    <FAButton onClick={onClick}>
      <IconWrapper>{children}</IconWrapper>
    </FAButton>
  );
}
