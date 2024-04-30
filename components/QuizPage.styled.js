import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-fox);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
`;

export const StyledContainerWrapper = styled.div`
  flex: 1;
  position: relative;

  /* CardContainer has a margin-bottom of 3rem for rendering in lists, here we reduce the margin to the quiz navigation */
  display: flex;
  & > div {
    flex: 1;
    align-self: stretch;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--color-counter);
  gap: 0.5rem;
`;

export const StyledQuizButtonWrong = styled.button`
  border: none;
  color: #ffa7a1;
  background-color: rgba(0, 0, 0, 0);
  font-size: calc(min(3.25rem, 15vh));
  padding: 5px;
`;

export const StyledQuizButtonRight = styled.button`
  border: none;
  color: #69bf8d;
  background-color: rgba(0, 0, 0, 0);
  font-size: calc(min(3.25rem, 15vh));
  padding: 5px;
`;

export const StyledButtonNavBar = styled.div`
  width: auto;
  display: flex;
  margin-top: 0.5rem;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 1rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const P = styled.p`
  color: var(--color-font-1);
  font-size: 1.2rem;
  margin: 0;
`;
