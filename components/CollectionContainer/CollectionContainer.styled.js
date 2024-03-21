import styled from "styled-components";
import Link from "next/link";

export const StyledCollectionContainer = styled.div`
  display: flex;
  border: 2px solid darkgray;
  border-radius: 20px;
  max-width: 75%;
  overflow: hidden;
  margin: 2rem;
`;

export const StyledColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 15px 0px 0px 15px;
  background-color: var(--color-fox);
  width: 25%;
`;

export const StyledTextContainer = styled.div`
  text-align: center;
  flex: 1;
`;

export const CollectionLink = styled(Link)`
  text-decoration: none;
  flex: 1;
  color: black;
  transition: color 0.3s;

  cursor: pointer;
  &:hover {
    color: orangered;
  }
`;

export const StyledCollectionName = styled.div`
  margin-top: 0;
  margin-bottom: 2.2rem;
`;
