import styled from "styled-components";
import Link from "next/link";

export const StyledNavigation = styled.nav`
  background-color: blanchedalmond;
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
  border: 2px solid green;
  flex-basis: 33%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
