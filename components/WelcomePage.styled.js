import styled from "styled-components";
import Link from "next/link";

export const StyledMain = styled.main`
  padding: var(--main-padding);
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: system-ui;
  max-width: 640px;
  margin: 0 auto;
`;

export const Space = styled.div`
  height: 3rem;
`;

export const StyledButton = styled.button`
  background-color: #db780de3;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  margin: 1.2rem 0.5rem;
`;

export const StyledLink = styled(Link)`
  color: white;
  font-style: bold;
  text-decoration: none;
`;

export const StyledTitle = styled.h3`
  text-align: center;
  font-size: 1.9rem;
  color: #db780de3;
`;

export const StyledWelcome = styled.h3`
  text-align: center;
  font-size: 2.2rem;
  color: #db780de3;
  padding: 0;
  margin: 0;
`;
export const StyledLoginNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
