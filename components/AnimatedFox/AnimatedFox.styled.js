import styled from "styled-components";
import Image from "next/image";

export const StyledFox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-2);
  padding: 0;
`;

export const StyledImage = styled(Image)`
  width: 90%;
  height: auto;
  max-width: 100%;
  max-height: 40vh;
`;
