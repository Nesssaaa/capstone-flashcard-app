import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
  border-radius: 20px;
  border: 2px solid gray;
`;

export const StyledButton = styled.button`
  background-color: #db780de3;
  color: white;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  margin: 2rem 0.5rem;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;

  gap: 1.5rem;
`;
