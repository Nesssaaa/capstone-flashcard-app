import { StyledCollectionHeader } from "./CollectionHeader.styled";

export default function CollectionHeader({ name }) {
  return (
    <>
      <StyledCollectionHeader>{name}</StyledCollectionHeader>
    </>
  );
}
