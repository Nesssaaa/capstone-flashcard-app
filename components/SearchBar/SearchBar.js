import { StyledInput } from "./SearchBar.styled";
export default function SearchBar({ handleSearch }) {
  return (
    <StyledInput
      aria-label="Mit diesem Suchfeld kannst du nach Lernkarten suchen"
      type="text"
      onChange={handleSearch}
      placeholder="Suche..."
    />
  );
}
