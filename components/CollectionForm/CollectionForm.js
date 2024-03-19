import { useState } from "react";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  IconWrapper,
} from "./CollectionForm.styled";
import { FaCheck } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import Link from "next/link";

export default function CollectionForm({
  collection = {},
  collections = [],
  addCollection,
  onSubmit,
}) {
  const [collectionName, setCollectionName] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));

    onSubmit(data);

    event.target.reset();
    setCollectionName(false);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        name="collection"
        required
        placeholder="Wie soll dein neuer Kartenstapel heißen?"
        type="text"
        defaultValue={collection.name}
        textLength={collectionName}
      />
      <StyledButton type="submit">
        <IconWrapper>
          <FaCheck />
        </IconWrapper>
      </StyledButton>

      <StyledButton>
        <Link href="/collections"></Link>
        <IconWrapper>
          <ImCancelCircle />
        </IconWrapper>
      </StyledButton>
    </StyledForm>
  );
}
