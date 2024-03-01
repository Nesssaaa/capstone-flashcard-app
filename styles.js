import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --color-nemo: #ff4a11;
    --color-granite: #252629;
    --color-water-10: #f3f5f9;
    --color-foam: #ffffff;

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
    background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
  }

  // fuer das <div id="__next">, das next.js einbaut
  body > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 100vh;
    gap: 1rem;
    
    
  }

 
`;
