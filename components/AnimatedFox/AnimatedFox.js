import Image from "next/image";
import { StyledFox } from "./AnimatedFox.styled";
import styled from "styled-components";

const StyledImage = styled(Image)`
  width: 90%;
  height: auto;
  max-width: 100%;
  max-height: 40vh;
`;

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
