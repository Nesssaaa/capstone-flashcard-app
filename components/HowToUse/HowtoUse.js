import React, { useState } from "react";

import { StyledButton, StyledImage, StyledNav } from "./HowToUse.styled";

export default function ExplainPictures() {
  const explainPictures = [
    "/Explain_Collection.png",
    "/Explain_CreateForm.png",
    "/Explain_Archiv.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === explainPictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? explainPictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <StyledImage
        src={explainPictures[currentIndex]}
        alt={`ExplainPicture ${currentIndex + 1}`}
        width={260}
        height={550}
      />
      <StyledNav>
        <StyledButton onClick={handlePreviousClick}>Zurück</StyledButton>
        <StyledButton onClick={handleNextClick}>Weiter</StyledButton>
      </StyledNav>
    </div>
  );
}
