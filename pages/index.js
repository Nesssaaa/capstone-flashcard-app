import { StyledHeadlines } from "@/components/Headline.styled";
import Link from "next/link";
import AnimatedFox from "@/components/AnimatedFox/AnimatedFox";

export default function HomePage() {
  return (
    <>
      <StyledHeadlines>Willkommen bei SchlauFuchs!</StyledHeadlines>
      <br />
      <StyledHeadlines>Die schlaue Art zu lernen!</StyledHeadlines>
      <AnimatedFox />
      <Link href="/collections">Lege gleich los...</Link>
    </>
  );
}
