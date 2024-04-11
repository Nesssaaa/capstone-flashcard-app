import { StyledList, StyledNavigation, Space } from "./Navigation.styled";

export default function NavBar({ children }) {
  return (
    <>
      <Space />
      <StyledNavigation>
        <StyledList>{children}</StyledList>
      </StyledNavigation>
    </>
  );
}
