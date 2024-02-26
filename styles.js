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
    
    margin: auto;
    font-family: system-ui;
    place-items: center;
    min-height: 100vh;
    max-width: 50rem;
  }

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 640px;
  margin: 0 auto;
}

`;
