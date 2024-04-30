import { useState } from "react";
import { explainPictures } from "./ExplainPicturesArray";
import {
  StyledButton,
  StyledImage,
  StyledNav,
  StyledExplainContainer,
} from "./HowToUse.styled";
import { StyledLink } from "@/components/HowToUse/HowToUse.styled";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ExplainPictures() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

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

  const isLastIndex = currentIndex === explainPictures.length - 1;

  return (
    <StyledExplainContainer>
      <Link
        aria-label="Hier gelangst du zum Kartenstapel"
        href={isLastIndex ? (isLoggedIn ? "/collections" : "/") : "#"}
      >
        <StyledImage
          src={explainPictures[currentIndex]}
          alt={`Erklaerbild ${currentIndex + 1}`}
          width={245}
          height={550}
          priority
        />
      </Link>

      <StyledNav>
        <StyledButton
          aria-label="Zurück zum vorherigen Erklaerbild"
          onClick={handlePreviousClick}
          $hidden={currentIndex === 0}
        >
          Zurück
        </StyledButton>
        <StyledButton
          aria-label="Weiter zum nächsten Erklaerbild"
          onClick={handleNextClick}
          $hidden={currentIndex === explainPictures.length - 1}
        >
          Weiter
        </StyledButton>
      </StyledNav>
      <StyledLink
        aria-label="Hier gelangst du zum Kartenstapel"
        href={isLoggedIn ? "/collections" : "/"}
      >
        Ansicht verlassen und gleich loslegen
      </StyledLink>
    </StyledExplainContainer>
  );
}
