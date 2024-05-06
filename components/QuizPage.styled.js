import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

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

export const StyledProgressContainer = styled.p`
  color: var(--color-font-1);
  font-size: 1.2rem;
  margin: 0;
`;

export const StyledSummaryContainer = styled.div`
  margin: 0;
  margin-top: 5vh;
  margin-left: 1rem;
  margin-right: 1rem;
  min-height: 0;
  border-radius: 20px;
  background-color: var(--color-card-quiz);
  box-shadow: 1px 1px 6px 1px var(--color-counter);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 1rem;
`;

export const StyledText = styled.p`
  color: #878787;
  font-size: calc(min(2rem, 3.25vh));
  text-align: center;
  margin: 0 1vh 0 1vh;
  &:first-child {
    margin-top: 3.5vh;
    font-size: calc(min(3rem, 5vh));
    color: var(--color-fox);
  }
`;

export const StyledSummary = styled.p`
  color: var(--color-fox-2);
  font-size: calc(min(2rem, 3.25vh));
  font-weight: bold;
  text-align: center;
  margin: 10vw 2.5vw 3.5vh 2.5vw;
  font-size: 4vh;
  font-weight: normal;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

export const StyledImage = styled(Image)`
  max-height: 100%;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-height: calc(min(4rem, 5vh));
`;

export const StyledButton = styled.button`
  color: var(--color-form-button);
  font-size: calc(min(1.3rem, 2.5vh));
  border: none;
  border-radius: 25px;
  background-color: var(--color-fox);
  font-weight: bold;
  padding: 0.8vh 2vh;
  margin: 0;
  width: 5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--color-fox-2);
  }
`;

export const StyledH2 = styled.h2`
  color: var(--color-font-1);
  text-align: center;
`;
