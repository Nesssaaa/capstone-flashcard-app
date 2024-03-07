import styled from "styled-components";
import Link from "next/link";

export const StyledNavigation = styled.nav`
  background-color: var(--color-background-3);
  padding: 0;

  width: 100%;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-around;
`;

export const StyledListItem = styled.li`
  list-style: none;
  flex-basis: 33.33%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.5);
  background-color: ${({ isActive }) =>
    isActive ? "var(--color-fox)" : "var(--color-background-3)"};
`;
