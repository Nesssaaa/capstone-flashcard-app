import MenuComponent from "../MenuComponent/MenuComponent.js";
import { StyledHeader, IconWrapper, StyledSpan } from "./Header.styled.js";

export default function Header() {
  return (
    <StyledHeader>
      SchlauFuchs <IconWrapper> 🦊</IconWrapper>
      <StyledSpan>
        <MenuComponent />
      </StyledSpan>
    </StyledHeader>
  );
}

// import MenuComponent from "../MenuComponent/MenuComponent.js";
// import { useState } from "react";
// import { StyledHeader, IconWrapper, StyledSpan } from "./Header.styled.js";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleMenu() {
//     setIsOpen((prevOpen) => !prevOpen);
//   }

//   return (
//     <StyledHeader>
//       SchlauFuchs <IconWrapper> 🦊</IconWrapper>
//       <StyledSpan>
//         <MenuComponent toggleMenu={toggleMenu} isOpen={isOpen} />
//       </StyledSpan>
//     </StyledHeader>
//   );
// }
