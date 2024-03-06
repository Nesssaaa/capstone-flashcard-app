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
          <StyledLink href="/create">Neu</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="/archive/archive">Archiv</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNavigation>
  );
}
