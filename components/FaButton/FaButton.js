//FAB --> Floating Action Button

import { FAButton, IconWrapper } from "./FaButton.styled";

export default function FActionButton({ children }) {
  return (
    <FAButton>
      <IconWrapper>{children}</IconWrapper>
    </FAButton>
  );
}
