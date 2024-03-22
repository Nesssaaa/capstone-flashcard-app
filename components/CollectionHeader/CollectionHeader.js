import { StyledHeadlines } from "../Headline.styled";

export default function CollectionHeader({ name }) {
  return (
    <>
      <StyledHeadlines>{name}</StyledHeadlines>
    </>
  );
}
