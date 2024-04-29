import styled from "styled-components";
import { calculateFontSize } from "../../utils";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  align-items: center;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 4vh;
  gap: 1vh;
`;

export const StyledLabel = styled.label`
  margin: 0.7rem;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: calc(min(1.7rem, 2.2vh));
  opacity: 95%;
  width: 90vw;
  max-width: 95%;
  color: var(--color-font-1);
  text-align: center;

  @media screen and (max-width: 414px) {
    max-width: 90%;
  }
`;

export const Select = styled.select`
  font-size: calc(min(1.7rem, 1.9vh));
  padding: 5px 5px;
  margin: 0.2rem auto;
  width: 90%;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-3);
  color: var(--color-font-1);
  background: var(--color-background-3);
  opacity: 70%;
  box-shadow: 1px 1px 2px 1px var(--color-form-2);
`;

export const NewCollectionInput = styled.input`
  margin: 0.2rem auto;
  width: 90%;
  font-size: calc(min(1.7rem, 1.9vh));
  padding: 6px 6px;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-3);
  color: var(--color-font-1);
  background: var(--color-background-3);
  opacity: 70%;
  box-shadow: 1px 1px 2px 1px var(--color-form-2);
`;

export const StyledInput = styled.textarea`
  margin: 0.2rem auto;
  padding: 3rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-3);
  font-size: calc(min(1.7rem, 2.3vh));
  background-color: var(--color-background-3);
  text-align: center;
  font-family: system-ui;
  opacity: 0.7;
  resize: none;
  outline: none;
  color: var(--color-font-1);
  width: 90%;
  box-shadow: 1px 1px 2px 1px var(--color-form-2);
`;

export const StyledButtonContainer = styled.div`
  /* border-top: 1px solid var(--color-border-3); */
  width: 110%;
  max-height: calc(min(4rem, 5vh));
  background: var(--color-background-3);
  padding: 0.7vh;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 1px 1px 2px 1px var(--color-form-1);
`;

export const StyledButton = styled.button`
  color: var(--color-form-button);
  font-size: calc(min(1.3rem, 2vh));
  border: none;
  border-radius: 25px;
  background-color: #db780de3;
  font-weight: bold;
  padding: 0.8vh 2vh;
  margin-right: 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #db780d;
  }
`;
