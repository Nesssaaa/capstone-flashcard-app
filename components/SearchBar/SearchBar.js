import { useEffect, useState } from "react";
export default function SearchBar({ handleSearch }) {
  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Suche..." />
    </div>
  );
}
