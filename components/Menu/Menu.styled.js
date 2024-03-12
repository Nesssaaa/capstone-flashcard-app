import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--color-background-1);
  height: 90%;
  width: 60%;
`;

export const MenuItems = styled.li`
  list-style: none;
  font-size: 1.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
`;
