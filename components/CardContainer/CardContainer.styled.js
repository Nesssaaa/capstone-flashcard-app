import styled from "styled-components";

export const StyledCardContainerQuestion = styled.div`
  display: flex;
  min-height: 25rem;
  width: auto;
  margin-left: 2rem;
  margin-right: 2rem;
  border: 2px var(--color-border-1) solid;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: var(--color-card-1);
  opacity: 0.7;

  font-size: 1.3rem;
`;

export const StyledCardContainerAnswer = styled.div`
  display: flex;
  min-height: 25rem;
  width: auto;
  margin-left: 2rem;
  margin-right: 2rem;
  border: 2px var(--color-border-1) solid;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: var(--color-card-2);
  opacity: 0.6;

  font-size: 1.3rem;
`;
