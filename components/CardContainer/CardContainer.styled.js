import { calculateFontSize } from "../../utils";
import styled from "styled-components";

const BaseCardStyle = `
  display: flex;
  flex-direction: column;
  min-height: 28rem;
  width: auto;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 3rem;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  opacity: 0.7;
  resize: none;
  font-family: system-ui;
`;

export const StyledCardContainerQuestion = styled.div`
  ${BaseCardStyle}
  background-color: white /*conic-gradient (var(--color-card-1),*/;
  box-shadow: 1px 1px 6px 1px var(--color-font-3);
  border: 2px var(--color-background-1) solid;
`;

export const StyledCardContainerAnswer = styled.div`
  ${BaseCardStyle}
  background-color: var(--color-card-1);
  box-shadow: 2px 2px 8px 3px var(--color-fox);
  border: 2px var(--color-background-2) solid;
`;

export const StyledTextShow = styled.textarea`
  margin: 0 0.8rem 0.5rem 0.8rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  min-height: 16rem;
  border-radius: 0.5rem;
  width: 100%;
  border: none;
  background-color: transparent;
  text-align: center;

  font-family: system-ui;
  resize: none;
  outline: none;
  font-size: ${({ textLength }) => `${calculateFontSize(textLength)}px`};
`;

export const IconWrapper = styled.div`
  font-size: 2.3rem;
  color: var(--color-font-3);
  opacity: 0.8;
  margin-left: 80%;
`;
