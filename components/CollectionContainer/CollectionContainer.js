import { FaRegPlayCircle } from "react-icons/fa";
import Link from "next/link";
import {
  StyledCollectionContainer,
  StyledColorContainer,
  StyledTextContainer,
  IconWrapper,
  CollectionLink,
} from "./CollectionContainer.styled";

import CollectionMenu from "../CollectionMenu/CollectionMenu";

export default function CollectionContainer({ name, id, deleteCard }) {
  return (
    <>
      <StyledCollectionContainer>
        <StyledColorContainer />
        <StyledTextContainer>
          <CollectionMenu />
          <CollectionLink href={`/collections/${id}`}>
            <h3>{name}</h3>
          </CollectionLink>
        </StyledTextContainer>
      </StyledCollectionContainer>
    </>
  );
}
