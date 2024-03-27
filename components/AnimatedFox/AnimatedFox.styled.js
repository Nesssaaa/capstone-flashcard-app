import styled from "styled-components";
import Image from "next/image";

export const StyledFox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-2);
`;

export const FoxGif = styled(Image)`
  border-radius: 50%;
`;
