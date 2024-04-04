import { signIn, signOut } from "next-auth/react";
import { SessionProvider, useSession } from "next-auth/react";
import { StyledButton } from "../WelcomePage.styled";
export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <StyledButton onClick={() => signOut()}>Abmelden</StyledButton>
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
