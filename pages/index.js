import { StyledHeadlines } from "@/components/Headline.styled";
import Link from "next/link";
import AnimatedFox from "@/components/AnimatedFox/AnimatedFox";
import {
  StyledLink,
  StyledLoginNav,
  StyledMain,
  StyledTitle,
  StyledWelcome,
} from "@/components/WelcomePage.styled";

import LoginButton from "@/components/LoginButton/LoginButton";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>SchlauFuchs</title>
      </Head>
      <StyledMain>
        <StyledWelcome>Willkommen </StyledWelcome>
        <StyledTitle>bei SchlauFuchs!</StyledTitle>

        <AnimatedFox />
        <StyledHeadlines>Die schlaue Art zu lernen!</StyledHeadlines>
        <StyledLoginNav>
          <StyledLink
            aria-label="Hier kannst du mehr erfahren, wie die App funktioniert"
            href="/howToUse"
          >
            Wie funktioniert <br />
            die App?
          </StyledLink>

          <SessionProvider>
            <LoginButton aria-label="Anmelden" />
          </SessionProvider>
        </StyledLoginNav>
      </StyledMain>
    </>
  );
}

HomePage.getInitialProps = () => {
  const disableLayout = true;
  return { disableLayout };
};
