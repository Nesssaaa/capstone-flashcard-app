import { useSession, signIn, signOut } from "next-auth/react";
import { StyledButton, StyledLink } from "./LoginButton.styled";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <StyledButton
          aria-label="Hier kannst du dich abmelden"
          onClick={() => signOut()}
        >
          Abmelden
        </StyledButton>
        <br />
        Angemeldet als {session.user.name} <br />
        <br />
        <StyledLink
          aria-label="Hier gelangst du zum Kartenstapel"
          href="/collections"
        >
          Hier klicken zum Loslegen...
        </StyledLink>
      </>
    );
  } else {
    return (
      <>
        <StyledButton
          aria-label="Hier kannst du dich anmelden"
          onClick={() => signIn()}
        >
          Anmelden
        </StyledButton>
      </>
    );
  }
}
