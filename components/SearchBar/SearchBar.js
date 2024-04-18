import { StyledInput } from "./SearchBar.styled";
export default function SearchBar({ handleSearch }) {
  return (
    <StyledInput type="text" onChange={handleSearch} placeholder="Suche..." />
  );
}
