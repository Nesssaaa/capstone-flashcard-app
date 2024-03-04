import { calculateFontSize } from "@/utils";
import styled from "styled-components";

const BaseCardStyle = `
  display: flex;
  min-height: 25rem;
  width: auto;
  margin-left: 2rem;
  margin-right: 2rem;
  // border: 2px var(--color-border-1) solid;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  opacity: 0.8;
  resize: none;
  font-family: system-ui;
`;

export const StyledCardContainerQuestion = styled.div`
  ${BaseCardStyle}
  background-color: var(--color-card-1);
  box-shadow: 2px 2px 10px 2px var(--color-background-1);
  border: 2px var(--color-background-1) solid;
`;

export const StyledCardContainerAnswer = styled.div`
  ${BaseCardStyle}
  background-color: var(--color-card-1);
  box-shadow: 2px 2px 8px 4px var(--color-background-2);
  border: 2px var(--color-background-2) solid;
`;

export const StyledTextShow = styled.textarea`
  margin: 0.5rem;
  padding: 0.5rem;
  min-height: 18rem;
  border-radius: 0.5rem;
  border: none;
  background-color: transparent;
  text-align: center;
  font-family: system-ui;
  resize: none;
  outline: none;
  font-size: ${({ textLength }) => `${calculateFontSize(textLength)}px`};
`;
