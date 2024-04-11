import styled from "styled-components";
import Link from "next/link";

export const StyledButton = styled.button`
  //using var from styles.js not possible, because Layout is disabled on index.js
  color: white;
  padding: 2rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  margin: 1.2rem 0.5rem;
  background-color: #db780de3;
  padding: 0.8rem 1.2rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #db780de3;
`;
