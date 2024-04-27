import styled from "styled-components";
import { calculateFontSize } from "../../utils";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  align-items: center;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  justify-content: center;
  align-items: center;
  padding: 0;
  padding-bottom: 3vh;
  min-width: 95%;
  max-width: 95%;
  margin-left: 3vh;
  margin-right: 3vh;
  margin-bottom: 2vh;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 0px 1px var(--color-border-3);
  position: relative;
`;

export const StyledLabel = styled.label`
  margin: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 2vh;
  color: var(--color-font-1);
  opacity: 95%;
  width: 90vw;
  max-width: 80%;
  color: var(--color-font-1);

  @media screen and (max-width: 414px) {
    max-width: 90%;
  }
`;

export const Select = styled.select`
  font-size: 1.2rem;
  padding: 5px 5px;
  margin: 0.2rem auto;
  width: 90%;
  border-radius: 0.5rem;
  color: var(--color-font-1);
  background: var(--color-background-3);
  opacity: 70%;
  box-shadow: 1px 1px 0px 1px var(--color-border-3);
`;

export const NewCollectionInput = styled.input`
  margin: 0.2rem auto;
  width: 90%;
  font-size: 1.2rem;
  padding: 5px 5px;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-3);
  color: var(--color-font-1);
  background: var(--color-background-3);
  opacity: 70%;
  box-shadow: 1px 1px 0px 1px var(--color-border-3);
`;

export const StyledInput = styled.textarea`
  margin: 0.2rem auto;
  padding: 3rem;
  border-radius: 0.5rem;
  border: none;

  background-color: var(--color-background-3);
  text-align: center;
  font-family: system-ui;
  opacity: 0.7;
  resize: none;
  outline: none;
  font-size: ${({ textLength }) => `${calculateFontSize(textLength)}rem`};
  color: var(--color-font-1);
  width: 90%;
  box-shadow: 1px 1px 0px 1px var(--color-font-3);
`;

export const StyledButtonContainer = styled.div`
  border-top: 1px solid var(--color-border-3);

  width: 100%;
  background: var(--color-background-3);
  padding: 0.5rem;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 1px 1px 2px 1px var(--color-font-3);
`;

export const StyledButton = styled.button`
  color: white;
  font-size: 2vh;
  border: none;
  border-radius: 25px;
  background-color: #db780de3;
  padding: 0.5vh 3vh;
  box-shadow: 1px 1px 6px 1px var(--color-background-1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #db780d;
  }
`;
