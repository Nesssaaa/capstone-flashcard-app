import { useState } from "react";
import { explainPictures } from "./ExplainPicturesArray";
import {
  StyledButton,
  StyledImage,
  StyledNav,
  StyledExplainContainer,
} from "./HowToUse.styled";
import { StyledLink } from "@/components/HowToUse/HowToUse.styled";

export default function ExplainPictures() {
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
      <StyledLink href="/collections">
        Ansicht verlassen und gleich loslegen
      </StyledLink>
    </StyledExplainContainer>
  );
}
