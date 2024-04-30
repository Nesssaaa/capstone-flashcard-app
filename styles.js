import { createGlobalStyle } from "styled-components";

export const lightTheme = (props) => ({
  "--color-background-1": props && props.$isArchive ? `#8a8f8a60` : `#bdbfbd60`,
  "--color-background-2": "#595a5900",
  "--color-background-3": "white",
  "--color-background-4": "#000000",
  "--color-background-5": "#154f5f",
  "--color-background-6": "#8a8f8a60",
  "--color-card-1": "white",
  "--color-card-2": "#e6f6e9",
  "--color-font-1": "#303030",
  "--color-font-2": "#ffffff",
  "--color-font-3": "#808580d5",
  "--color-border-1": "#000000",
  "--color-border-2": "#ffffff",
  "--color-border-3": "#a9a9a9",
  "--color-fox": "#db780de3",
  "--color-header": "#ffffffba",
  "--color-counter": "#808580d5",
  "--color-form-1": "#dfdfdf",
  "--color-form-2": "#b0b0b0",
  // "--color-form-button": "#303030",
  "--color-form-button": "#ffffff",
});

export const darkTheme = (props) => {
  return {
    "--color-background-1": "#111111",
    "--color-background-2": "#212121",
    "--color-background-3": "#333333",
    "--color-background-4": "#000000",
    "--color-background-5": "#154f5f",
    "--color-background-6": "#8a8f8a60",
    "--color-card-1": "#8a8f8a60",
    "--color-card-2": "#ffffff",
    "--color-font-1": "#e9dbbf",
    "--color-font-2": "#e9dbbf",
    "--color-font-3": "#808580d5",
    "--color-border-1": "#ffffff",
    "--color-border-2": "#eeeeee",
    "--color-border-3": "#505050",
    "--color-fox": "#db780de3",
    "--color-header": "#333333",
    "--color-counter": "#909090",
    "--color-form-1": "#303030",
    "--color-form-2": "#404040",

    "--color-form-button": "#303030",
  };
};

export default createGlobalStyle`
:root {
  ${(props) => props.theme.rootVariablesFunc(props)}
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  body {
    display: flex;
    flex-direction: column;
    padding: 0;
    font-family: system-ui;
    max-width: 640px;
    margin: 0 auto;
    background: linear-gradient(90deg, var(--color-background-1) 0%, var(--color-background-2) 100%);
 }

  body > div:first-child {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 100lvh;
    min-height: 100lvh;
    gap: 1rem;
    position: relative;
  }
`;
