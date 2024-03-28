import { StyledHeadlines } from "@/components/Headline.styled";
import { StyledMain } from "@/components/WelcomePage.styled";
import HowToUse from "@/components/HowToUse/HowtoUse";

export default function HowToUsePage() {
  return (
    <StyledMain>
      {/* <Space /> */}

      <StyledHeadlines>Wie funktioniert die App?</StyledHeadlines>
      <HowToUse />
    </StyledMain>
  );
}

// HowToUsePage.getInitialProps = () => {
//   const disableLayout = true;
//   return { disableLayout };
// };
