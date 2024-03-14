import styled from "styled-components";

export const StyledCollectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid darkgray;
  border-radius: 20px;
  max-width: 75%;
  overflow: hidden;
`;

export const StyledColorContainer = styled.div`
  display: flex;
  border-radius: 0 15px 15px 0;
  background-color: orange;
  width: 5rem;
`;

export const StyledTextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 0.7rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;
