import styled from "styled-components";
import { MenuButton, MenuItem } from "@szhsin/react-menu";
import Link from "next/link";

export const StyledMenu = styled.div`
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MenuList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 30%;
  bottom: 0;
  list-style: none;
  font-size: 0.3rem;
  background-color: var(--color-background-4);
  opacity: 0.75;
  color: white;
  padding: 3rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  font-size: 0.5rem important;
`;

export const StyledLink = styled(Link)`
  color: white;
  list-style: none;
  text-decoration: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => size || "2.3rem"};
`;

export const StyledMenuButton = styled(MenuButton)`
  border: none;
  background-color: transparent;
`;
