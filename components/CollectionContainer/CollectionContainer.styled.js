import styled from "styled-components";
import Link from "next/link";

export const StyledCollectionContainer = styled.div`
  display: flex;
  border: 2px solid darkgray;
  border-radius: 20px;
  width: 75%;
  position: relative;
  align-items: center;
`;

export const StyledColorContainer = styled.div`
  display: flex;
  border-radius: 20px 0px 0px 20px;
  border: 1px solid darkgrey;
  background-color: ${(props) => props.$color};
  width: 25%;
  flex: 1;

  position: absolute;
  bottom: -1px;
  top: -1px;
  left: -1px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 2px solid violet;
  flex: 1;
  margin-left: 25%;
  @media screen and (max-width: 414px) {
    flex-direction: column;
  }
`;

export const StyledTextContainer = styled.div`
  border: 2px solid red;
  text-align: center;
  flex: 1;
  font-size: 1rem;
  padding-top: ${(props) => (props.$noCards ? "1.7rem" : "0")};

  @media screen and (max-width: 414px) {
    padding-top: ${(props) => (props.$noCards ? "1.5rem" : "0")};
    padding-bottom: ${(props) => (props.$noCards ? "1.2rem" : "0")};
  }
`;

export const CollectionLink = styled(Link)`
  text-decoration: none;
  border: 2px solid green;
  color: var(--color-font-1);
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
  border: 2px solid yellow;
  @media screen and (max-width: 414px) {
    margin-bottom: 0.5rem;
    max-width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000c0;
  align-self: center;
  border: 2px solid green;
`;
export const IconWrapper = styled.div`
  display: flex;
  font-size: 2.8rem;
  justify-content: center;
  align-items: center;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border: 2px solid pink;

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
  border: 2px solid brown;

  @media screen and (max-width: 414px) {
    margin-bottom: 1rem;
  }
`;
