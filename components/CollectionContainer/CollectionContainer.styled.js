import styled from "styled-components";
import Link from "next/link";

export const StyledCollectionContainer = styled.div`
  display: flex;
  border: 2px solid darkgray;
  border-radius: 20px;
  min-width: 75%;
  max-width: 75%;
  flex: 1;
`;

export const StyledColorContainer = styled.div`
  display: flex;
  border-radius: 15px 0px 0px 15px;
  background-color: ${(props) => props.$color};
  width: 25%;
`;

export const StyledTextContainer = styled.div`
  text-align: center;
  flex: 1;
  font-size: 1rem;
  padding-top: ${(props) => (props.noCards ? "1.7rem" : "0")};

  @media screen and (max-width: 414px) {
    padding-top: ${(props) => (props.noCards ? "1.5rem" : "0")};
    padding-bottom: ${(props) => (props.noCards ? "1.2rem" : "0")};
  }
`;

export const CollectionLink = styled(Link)`
  text-decoration: none;

  color: black;
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: orangered;
  }
`;

export const StyledCollectionName = styled.h3`
  margin-top: 0;
  margin-bottom: 2.2rem;
  overflow-wrap: break-word;
  max-width: 45%;
  @media screen and (max-width: 414px) {
    margin-bottom: 0.5rem;
    max-width: 100%;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 414px) {
    flex-direction: column;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ $isActive }) =>
    $isActive ? "var(--color-fox)" : "var(--color-font-3)"};
  align-self: center;
`;
export const IconWrapper = styled.div`
  display: flex;
  font-size: 2.8rem;
  justify-content: center;
  align-items: center;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  @media screen and (max-width: 414px) {
    font-size: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const StyledCounter = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  min-width: 10%;
  border-radius: 20px 20px;
  border: 2px solid darkgray;
  color: #808080da;

  @media screen and (max-width: 414px) {
    margin-bottom: 1rem;
  }
`;
