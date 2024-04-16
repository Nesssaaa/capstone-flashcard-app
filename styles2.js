import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  //background -colors-body, Header Navigation
  /* --color-background-1: ${(props) =>
    props.$isArchive ? `#8a8f8a60` : `#bdbfbd60`};
    --color-background-2:#595a5900;
    --color-background-3: white;
    --color-background-4: #000000;
    
    --color-background-5: #154f5f;
    --color-background-6:  #8a8f8a60; */

  //background -colors-card
  /* --color-card-1: white;
    --color-card-2: #e6f6e9; */

  //font-colors
  /* --color-font-1: #000000;
    --color-font-2: white;
    --color-font-3: #808580d5; */

  //border-colors
  /* --color-border-1: #000000;
    --color-border-2: white; */

  //special-colors
  --color-fox:#db780de3; 
  --gap: 20px;

  // Dunkle Farbpalette für Dark Mode
  --dark-color-background-1: #111111;
  --dark-color-background-2: #212121;
  --dark-color-background-3: #333333;
  --dark-color-background-4: #000000;
  --dark-color-background-5: #154f5f;
  --dark-color-background-6: #8a8f8a60;
  --dark-color-card-1: #222222;
  --dark-color-card-2: #333333;
  --dark-color-font-1: #ffffff;
  --dark-color-font-2: #eeeeee;
  --dark-color-font-3: #808580d5;
  --dark-color-border-1: #ffffff;
  --dark-color-border-2: #eeeeee;
  --dark-color-fox: #db780de3; 
`;
