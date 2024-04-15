import styled from "styled-components";
import {
  MenuButton,
  MenuItem,
  Menu,
  SubMenu,
  MenuDivider,
} from "@szhsin/react-menu";

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
export const MainMenu = styled(Menu)`
  opacity: 0.85;
  z-index: 1;
`;

export const MenuList = styled.ul`
  position: absolute;
  top: 0;
  max-width: 640px;
  width: 100%;
  height: 80%;

  list-style: none;
  font-size: 0.3rem;
  background-color: var(--color-background-4);
  color: var(--color-fox);
  padding: 3rem;
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  font-size: 0.5rem important;
  color: var(--color-fox);
  list-style: none;
  text-decoration: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ $size }) => $size || "2.3rem"};
`;

export const StyledMenuButton = styled(MenuButton)`
  border: none;
  background-color: transparent;
`;

export const StyledSubMenu = styled(SubMenu)`
  font-size: 1.1rem;
  color: var(--color-fox);
  list-style: none;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const StyledMenuDivider = styled(MenuDivider)`
  border: 0.1px var(--color-fox) solid;
  width: 100%;
`;
