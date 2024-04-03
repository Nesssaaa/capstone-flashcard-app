import GoogleLoginComponent from "@/components/GoogleLoginComponent/GoogleLoginComponent";
import { StyledHeadlines } from "@/components/Headline.styled";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <StyledHeadlines>Willkommen bei SchlauFuchs!</StyledHeadlines>
      <br />
      <StyledHeadlines>Die schlaue Art zu lernen!</StyledHeadlines>
      <Link href="/collections">Lege gleich los...</Link>
      <GoogleLoginComponent />
    </>
  );
}
