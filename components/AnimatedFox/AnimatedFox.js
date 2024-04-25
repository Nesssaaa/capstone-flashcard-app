import { StyledFox, StyledImage } from "./AnimatedFox.styled";

export default function AnimatedFox() {
  return (
    <StyledFox>
      <StyledImage
        src="/fox.gif"
        alt="bewegtes Bild eines Fuchses"
        width={100}
        height={100}
        priority
      />
    </StyledFox>
  );
}
