import { StyledHeadlines } from "@/components/Headline.styled";
import { StyledMain, Space } from "@/components/WelcomePage.styled";

export default function HowToUse() {
  return (
    <StyledMain>
      <Space />
      <StyledHeadlines>Wie funktioniert die App?</StyledHeadlines>
    </StyledMain>
  );
}

HowToUse.getInitialProps = () => {
  const disableLayout = true;
  return { disableLayout };
};
