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
  "--color-font-1": "#000000",
  "--color-font-2": "white",
  "--color-font-3": "#808580d5",
  "--color-border-1": "#000000",
  "--color-border-2": "white",
  "--color-fox": "#db780de3",
  "--color-header": "#ffffffba",
});

export const darkTheme = (props) => {
  console.log("Ich bin der Darkmode");
  return {
    "--color-background-1": "#111111",
    "--color-background-2": "#212121",
    "--color-background-3": "#333333",
    "--color-background-4": "#000000",
    "--color-background-5": "#154f5f",
    "--color-background-6": "#8a8f8a60",
    "--color-card-1": "#8a8f8a60",
    "--color-card-2": "#ffffff",
    "--color-font-1": "#ffffff",
    "--color-font-2": "#eeeeee",
    "--color-font-3": "white",
    "--color-border-1": "#ffffff",
    "--color-border-2": "#eeeeee",
    "--color-fox": "#db780de3",
    "--color-header": "#333333",
  };
};

export default createGlobalStyle`
:root {
  ${(props) => props.theme.func(props)}

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

  body[data-theme="dark"] {
    ${Object.entries(darkTheme)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n")}
}
`;
