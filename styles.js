import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  //background -colors-body, Header Navigation
    --color-background-1: #00C9FF;
    --color-background-2: #92FE9D;
    --color-background-3: white;
    --color-background-4: #000000;

    

    //background -colors-card
    --color-card-1: white;
    --color-card-2: #e6f6e9;

    //font-colors
    --color-font-1: #000000;
    --color-font-2: white;

    //border-colors
    --color-border-1: #000000;
    --color-border-2: white;
   

    --gap: 20px;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

 

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-family: system-ui;
  max-width: 640px;
    margin: 0 auto;
    background: linear-gradient(90deg, var(--color-background-1) 0%, var(--color-background-2) 100%);
  }

  // fuer das <div id="__next">, das next.js einbaut
  body > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 100vh;
    min-height: 100vh;
    gap: 1rem;
    
    
  }

 
`;
