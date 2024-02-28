import Link from "next/link";
import {
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNavigation,
} from "./Navigation.styled";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledList>
        <StyledListItem>
          <StyledLink href="/">Home</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="/">Neu</StyledLink>
        </StyledListItem>

        <StyledListItem>
          <StyledLink href="/">Archiv</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNavigation>
  );
}
