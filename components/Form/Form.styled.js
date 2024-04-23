import styled from "styled-components";
import { calculateFontSize } from "../../utils";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

export const StyledLabel = styled.label`
  margin: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: var(--color-font-1);
  width: 90vw;
  max-width: 80%;
  color: var(--color-font-1);

  @media screen and (max-width: 414px) {
    max-width: 90%;
  }
`;

export const Select = styled.select`
  font-size: 1.2rem;
  padding: 2px 5px;
  margin: 0.2rem auto;
  width: 90%;
  border-radius: 0.5rem;
  border: 1px solid darkgrey;
  color: var(--color-input-select);
`;

export const NewCollectionInput = styled.input`
  margin: 0.2rem auto;
  width: 90%;
  font-size: 1.2rem;
  padding: 3px 5px;
  line-height: 10.5%;
  border-radius: 0.5rem;
  border: 1px solid darkgrey;
  color: var(--color-input-select);
`;

export const StyledInput = styled.textarea`
  margin: 0.2rem auto;
  padding: 3rem;
  height: 13rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 2px 2px 10px 2px var(--color-background-1);
  background-color: var(--color-background-3);
  text-align: center;
  font-family: system-ui;
  opacity: 0.7;
  resize: none;
  outline: none;
  font-size: ${({ textLength }) => `${calculateFontSize(textLength)}px`};
  color: var(--color-font-1);
  border: 1px solid darkgrey;
  width: 95%;
`;
