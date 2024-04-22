import { IconWrapper, StyledLink, StyledListItem } from "./Navigation.styled";
import { useRouter } from "next/router";

export default function NavBarButton({ icon, href }) {
  const router = useRouter();
  return (
    <StyledListItem>
      <StyledLink
        aria-label="Hier gelangst du zum jeweiligen angegebenen Link"
        $isActive={router.pathname === href}
        href={href}
      >
        <IconWrapper>{icon}</IconWrapper>
      </StyledLink>
    </StyledListItem>
  );
}
