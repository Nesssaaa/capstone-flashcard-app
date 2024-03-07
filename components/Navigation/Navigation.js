import { useRouter } from "next/router";
import {
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNavigation,
} from "./Navigation.styled";

export default function Navigation() {
  const router = useRouter();
  return (
    <StyledNavigation>
      <StyledList>
        <StyledListItem isActive={router.pathname === "/"}>
          <StyledLink href="/">Home</StyledLink>
        </StyledListItem>
        <StyledListItem isActive={router.pathname === "/create"}>
          <StyledLink href="/create">Neu</StyledLink>
        </StyledListItem>
        <StyledListItem isActive={router.pathname === "/archive"}>
          <StyledLink href="/archive">Archiv</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNavigation>
  );
}
