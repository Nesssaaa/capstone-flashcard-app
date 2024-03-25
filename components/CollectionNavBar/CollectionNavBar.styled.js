import styled from "styled-components";
import Link from "next/link";

export const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  background-color: var(--color-background-3);
  padding: 0;
  border-top: 0.5px var(--color-background-1) solid;
  max-width: 640px;
  width: 100vw;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ $isActive }) =>
    $isActive ? "var(--color-fox)" : "var(--color-font-3)"};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-around;
`;

export const StyledListItem = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  flex-basis: 25%;
  height: 3.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  font-size: 2.8rem;
  justify-content: center;
  align-items: center;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  @media screen and (max-width: 414px) {
    font-size: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const Space = styled.div`
  height: 3rem;
`;
