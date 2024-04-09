//FAB --> Floating Action Button; Attention: should only be integrated on pages
//absolute positioning via parent element body > div:first-child

import { FAButton, IconWrapper } from "./FaButton.styled";

export default function FActionButton({ children, onClick }) {
  return (
    <FAButton onClick={onClick}>
      <IconWrapper>{children}</IconWrapper>
    </FAButton>
  );
}
