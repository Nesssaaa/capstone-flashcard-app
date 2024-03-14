import { FaRegPlayCircle } from "react-icons/fa";
import Link from "next/link";
import {
  StyledCollectionContainer,
  StyledColorContainer,
  StyledTextContainer,
  IconWrapper,
  CollectionLink,
} from "./CollectionContainer.styled";

export default function CollectionContainer({ name, id }) {
  return (
    <>
      <StyledCollectionContainer>
        <StyledColorContainer />
        <CollectionLink href={`/collections/${id}`}>
          <StyledTextContainer>
            <h3>{name}</h3>
          </StyledTextContainer>
        </CollectionLink>
      </StyledCollectionContainer>
    </>
  );
}
