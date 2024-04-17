import styled from "styled-components";
import Link from "next/link";

export const StyledHeader = styled.div`
  display: flex;
  background-color: var(--color-header);
  padding: 1rem;
  margin-bottom: 1.5rem;
  flex-direction: row;
  justify-content: center;

  font-size: 2.5rem;
  color: var(--color-fox);
  font-weight: bold;
  border-radius: 0 0 40px 40px;
  border: 0.5px var(--color-background-1) solid;

  @media screen and (max-width: 414px) {
    font-size: 2.2rem;
  }
`;

export const StyledSpan = styled.span`
  margin-left: 8%;

  justify-content: center;
  align-items: center;
  display: flex;
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
  margin-left: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 414px) {
    font-size: 2.5rem;
    margin-left: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-fox);
  display: flex;
  flex-direction: row;
`;
