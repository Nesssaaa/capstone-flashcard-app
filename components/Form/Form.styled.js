import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  margin: auto;
  padding: 0 1rem;
  height: 3rem;
  width: 9rem;
  color: white;
  border-radius: 0.5rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledInput = styled.input`
  margin: 0;
  padding: 0 1rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: rgba(0, 0, 0, 0.1);
`;
