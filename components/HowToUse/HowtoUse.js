import React, { useState } from "react";

import {
  StyledButton,
  StyledImage,
  StyledNav,
  StyledExplainContainer,
} from "./HowToUse.styled";
import { StyledLink } from "@/components/HowToUse/HowToUse.styled";

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
    <StyledExplainContainer>
      <StyledImage
        src={explainPictures[currentIndex]}
        alt={`ExplainPicture ${currentIndex + 1}`}
        width={260}
        height={550}
      />
      <StyledNav>
        <StyledButton
          onClick={handlePreviousClick}
          $hidden={currentIndex === 0}
        >
          Zurück
        </StyledButton>
        <StyledButton
          onClick={handleNextClick}
          $hidden={currentIndex === explainPictures.length - 1}
        >
          Weiter
        </StyledButton>
      </StyledNav>
      <StyledButton onClick>
        {" "}
        <StyledLink href="/collections">
          Ansicht verlassen und gleich loslegen
        </StyledLink>
      </StyledButton>
    </StyledExplainContainer>
  );
}
