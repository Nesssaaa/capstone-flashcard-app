import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledImage = styled(Image)`
  border-radius: 20px;
  border: 2px solid gray;
  width: 93%;
  height: 100%;
  max-width: 100vw;
  max-height: 75vh;

  @media screen and (max-width: 375px) {
    width: 75%;
    max-height: 60vh;
  }
`;

export const StyledButton = styled.button`
  background-color: var(--color-fox);
  color: white;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  margin: 1.7rem 0.5rem 0.3rem 0.5rem;
  visibility: ${(props) => (props.$hidden ? "hidden" : "visible")};

  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 80vw;
  width: auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: var(--color-fox);
  color: white;
  padding: 0.8rem 1.2rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 25px;
  margin: 1.7rem 0.5rem 0.3rem 0.5rem;
  max-width: 80vw;
  width: auto;
  text-align: center;

  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const StyledExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
