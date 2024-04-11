import { useSession, signIn, signOut } from "next-auth/react";
import { StyledButton, StyledLink } from "./LoginButton.styled";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    console.log(session);
    return (
      <>
        <StyledButton onClick={() => signOut()}>Abmelden</StyledButton>
        <br />
        Angemeldet als {session.user.name} <br />
        <br />
        <StyledLink href="/collections">
          Hier klicken zum Loslegen...
        </StyledLink>
      </>
    );
  } else {
    return (
      <>
        {/* Not signed in <br /> */}
        <StyledButton onClick={() => signIn()}>Anmelden</StyledButton>
      </>
    );
  }
}
