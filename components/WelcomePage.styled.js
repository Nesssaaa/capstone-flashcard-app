import styled from "styled-components";
import Link from "next/link";

export const StyledMain = styled.main`
  display: flex;
  border: 2px solid red;
  padding: var(--main-padding);

  overflow: auto;
  flex-direction: column;
  align-items: center;
  font-family: system-ui;
  max-width: 640px;
  margin: 0 auto;
`;

export const Space = styled.div`
  height: 3rem;
  flex: 1;
`;

export const StyledButton = styled.button`
  background-color: #db780de3;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  margin: 1.2rem 0.5rem;
  flex: 1;
`;

export const StyledLink = styled(Link)`
  color: white;
  font-style: bold;
  text-decoration: none;
  background-color: #db780de3;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  margin: 1.2rem 0.5rem;
  text-align: center;
  flex: 1;
`;

export const StyledTitle = styled.h3`
  text-align: center;
  font-size: 1.9rem;
  color: #db780de3;
  flex: 1;
`;

export const StyledWelcome = styled.h3`
  text-align: center;
  font-size: 2.2rem;
  color: #db780de3;
  padding: 0;
  margin: 0;
  flex: 1;
`;
export const StyledLoginNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;
