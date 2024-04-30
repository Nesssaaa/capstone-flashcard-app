import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-fox);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  color: var(--color-counter);
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledQuizButtonWrong = styled.button`
  border: none;
  color: #ffa7a1;
  background-color: rgba(0, 0, 0, 0);
  font-size: 3rem;
  padding: 5px;
`;

export const StyledQuizButtonRight = styled.button`
  border: none;
  color: #69bf8d;
  background-color: rgba(0, 0, 0, 0);
  font-size: 3rem;
  padding: 5px;
`;

export const StyledButtonNavBar = styled.div`
  width: auto;
  display: flex;
  margin-top: 0.5rem;
  gap: 2rem;
  justify-content: center;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
