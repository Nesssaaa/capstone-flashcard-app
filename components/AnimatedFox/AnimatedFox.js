import Image from "next/image";
import { FoxGif, StyledFox } from "./AnimatedFox.styled";

export default function AnimatedFox() {
  return (
    <div>
      <StyledFox>
        <FoxGif src="/fox.gif" alt="fox gif" width={250} height={250} />
      </StyledFox>
    </div>
  );
}
