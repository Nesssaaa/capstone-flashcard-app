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
  border-right: none;
  background-color: ${(props) => props.$color};
  width: 25%;
  flex: 1;
  position: absolute;
  bottom: -1px;
  top: -1px;
  left: -1px;
`;

export const StyledTextContainer = styled.div`
  text-align: center;
  flex: 1;
  font-size: 1rem;
  padding-top: ${(props) => (props.$noCards ? "1.7rem" : "0")};
  margin-left: 25%;
  width: 75%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 414px) {
    padding-top: ${(props) => (props.$noCards ? "1.5rem" : "0")};
    padding-bottom: ${(props) => (props.$noCards ? "1.2rem" : "0")};
  }
`;

export const CollectionLink = styled(Link)`
  text-decoration: none;
  color: var(--color-font-1);
  transition: color 0.3s;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: orangered;

    @media screen and (max-width: 414px) {
      flex-direction: column;
    }
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledCollectionName = styled.h3`
  margin-top: 0;
  margin-bottom: 2.2rem;
  overflow-wrap: break-word;
  min-width: 45%;
  margin-top: 15%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 3px;
  flex: 1;
  text-align: center;
  color: (var(--color-font-1));

  @media screen and (max-width: 414px) {
    margin-bottom: 0.5rem;
    max-width: 100%;
  }
`;

export const StyledCounter = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  min-width: 14%;
  max-width: 20%;
  border-radius: 20px 20px;
  border: 2px solid darkgray;
  color: #808080da;
  text-align: center;
  padding: 3px;
  margin-left: 5%;
  margin-right: 5%;

  @media screen and (max-width: 414px) {
    margin-bottom: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #303030;
  align-self: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: darkblue;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 414px) {
    font-size: 2rem;
  }
`;
