import styled from "styled-components";
import Link from "next/link";

export const StyledCollectionContainer = styled.div`
  display: flex;
  /* align-items: center; */
  border: 2px solid darkgray;
  border-radius: 20px;
  max-width: 75%;
  overflow: hidden;
`;

export const StyledColorContainer = styled.div`
  display: flex;
  border-radius: 15px 0px 0px 15px;
  background-color: orange;
  width: 25%;
`;

export const StyledTextContainer = styled.div`
  text-align: center;
  margin-left: 0.7rem;
  border: 2px solid red;
`;

// export const IconWrapper = styled.div`
//   display: flex;
//   font-size: 2rem;
//   justify-content: center;
//   align-items: center;
//   padding-left: 2.5rem;
//   padding-right: 2.5rem;
// `;

export const CollectionLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: orangered;
  }
`;
