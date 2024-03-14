import { FaRegPlayCircle } from "react-icons/fa";
import {
  StyledCollectionContainer,
  StyledColorContainer,
  StyledTextContainer,
  IconWrapper,
} from "./CollectionContainer.styled";

export default function CollectionContainer({ name }) {
  return (
    <>
      <StyledCollectionContainer>
        <StyledColorContainer />
        <StyledTextContainer>
          <h3>{name}</h3>
          <IconWrapper>
            <FaRegPlayCircle />
          </IconWrapper>
        </StyledTextContainer>
      </StyledCollectionContainer>
    </>
  );
}
