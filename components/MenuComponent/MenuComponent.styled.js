import styled from "styled-components";
import { MenuItem } from "@szhsin/react-menu";
import Link from "next/link";

export const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  /* background-color: var(--color-background-5); */
  /* display: flex;
  flex-direction: column;
  gap: 10px;
  
  height: 100vh;
  width: 60%; */

  /* top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  &.open {
    transform: translateX(0);
  }
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 10px; */
`;

export const MenuList = styled.ul`
  position: absolute;
  z-index: 1;
  height: 100vh;
  width: -100vh;
  right: -2rem;
  list-style: none;
  font-size: 1rem;
  background-color: var(--color-background-5);
  opacity: 0.95;
  color: white;
  padding: 2rem;
  margin: 0;
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  color: white;
  list-style: none;
  text-decoration: none;
  font-size: 1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
`;
