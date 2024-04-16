import { StyledInput } from "./SearchBar.styled";
export default function SearchBar({ handleSearch }) {
  return (
    <div>
      <StyledInput type="text" onChange={handleSearch} placeholder="Suche..." />
    </div>
  );
}
