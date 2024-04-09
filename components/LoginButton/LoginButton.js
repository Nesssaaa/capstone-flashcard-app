import { StyledButton } from "../WelcomePage.styled";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  console.log("LoginButton", session);
  if (session) {
    return (
      <>
        <StyledButton onClick={() => signOut()}>Abmelden</StyledButton>
        <br />
        Angemeldet als {session.user.name} <br />
        <Link href="/collections">Leg los...</Link>
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
