import styled from "styled-components";

export const StyledMain = styled.main`
  padding: var(--main-padding);
  flex: 1;
  overflow: auto;
  display: ${(props) => (props.theme.useFlexMain ? "flex" : "block")};
  flex-direction: column;
`;
