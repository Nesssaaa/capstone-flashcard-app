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
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  visibility: ${(props) => (props.$hidden ? "hidden" : "visible")};
`;

export const StyledButtonNavBar = styled.div`
  width: auto;
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0rem;
  gap: 2rem;
  justify-content: center;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  color: var(--color-font-3);
`;
