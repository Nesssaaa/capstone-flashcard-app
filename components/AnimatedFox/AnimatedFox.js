import Image from "next/image";
import { StyledFox } from "./AnimatedFox.styled";

export default function AnimatedFox() {
  return (
    <StyledFox>
      <Image src="/fox.gif" alt="fox gif" width={250} height={250} priority />
    </StyledFox>
  );
}
