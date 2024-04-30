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
  position: relative;
`;

const QuizPageStyle = `
  left: 1.5rem;
  right: 1.5rem;
  position: absolute;
  top: 5px;
  bottom: 1rem;
  margin: 0;
  min-height: 0;
`;

export const StyledCardContainerQuestion = styled.div`
  ${BaseCardStyle}

  ${(props) =>
    props.theme?.cardContainer?.useAllAvailableSpace ? QuizPageStyle : ""}

  background-color: var(--color-card-1);
  box-shadow: 1px 1px 6px 1px var(--color-font-3);

  &::before {
    content: ${({ $level }) => `"lvl ${$level}"`};
    position: absolute;
    z-index: -1;
    bottom: 1rem;
    left: 1.5rem;
    font-weight: bold;
    font-size: 2rem;
    color: var(--color-fox);
    opacity: 0.3;
  }
`;

export const StyledCardContainerAnswer = styled.div`
  ${BaseCardStyle}
  ${(props) =>
    props.theme?.cardContainer?.useAllAvailableSpace ? QuizPageStyle : ""}

  background-color: var(--color-card-1);
  box-shadow: 2px 2px 8px 3px var(--color-fox);

  &::before {
    content: ${({ $level }) => `"lvl ${$level}"`};
    position: absolute;
    z-index: -1;
    bottom: 1rem;
    left: 1.5rem;
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-fox);
    opacity: 0.3;
  }
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
  color: var(--color-font-1);
  font-family: system-ui;
  resize: none;
  outline: none;
  font-size: ${({ textLength }) => `${calculateFontSize(textLength)}px`};
  cursor: grab;
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  left: 50%;
  margin-left: -1rem;
  font-size: 2.3rem;
  color: var(--color-font-3);
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
`;
