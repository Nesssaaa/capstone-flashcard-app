import styled from "styled-components";

const StyledCardLevel = styled.div`
  font-size: 2.3rem;
  color: var(--color-font-3);
  opacity: 0.9;
  padding: 1rem 1rem 0 1rem;
  border: 2px solid orange;
`;

export default function CardLevel({ level }) {
  return <StyledCardLevel>{level}</StyledCardLevel>;
}
