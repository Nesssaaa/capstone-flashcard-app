import styled from "styled-components";
import Link from "next/link";

export const StyledMain = styled.main`
  display: flex;
  border: 2px solid red;
  padding: var(--main-padding);
  flex-direction: column;
  align-items: center;
  font-family: system-ui;
  max-width: 640px;
  margin: 0 auto;
  flex: 1;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  color: white;
  font-style: bold;
  text-decoration: none;
  background-color: #db780de3;
  padding: 0.8rem 1.2rem;
  font-size: 2.5vh;
  border: none;
  border-radius: 25px;
  margin: 1.2rem 0.5rem;
  text-align: center;
  flex: 1;
`;

export const StyledWelcome = styled.h3`
  text-align: center;
  font-size: 4vh;
  color: #db780de3;
  padding: 0;
  margin: 0;
  margin-top: 1.5vh;
  flex: 1;
  border: 2px solid blue;
`;

export const StyledTitle = styled.h3`
  text-align: center;
  font-size: 3vh;
  color: #db780de3;
  flex: 1;
  border: 2px solid yellow;
  margin-top: 1rem;
`;

export const StyledLoginNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  border: 2px solid orange;
  height: 15vh;
`;
