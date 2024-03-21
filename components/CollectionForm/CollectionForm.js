import {
  StyledButton,
  StyledForm,
  StyledInput,
  IconWrapper,
} from "./CollectionForm.styled";
import { FaCheck } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useRouter } from "next/router";
import { CirclePicker } from "react-color";
import { useState } from "react";

export default function CollectionForm({ collection, editCollection }) {
  const currentCollection = collection;
  const router = useRouter();
  const [color, setColor] = useState("#fff");

  function handleChangeColor(color) {
    setColor({ background: color.hex });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));

    event.target.reset();
    editCollection({
      id: currentCollection.id,
      name: data.collectionName,
    });
    router.push(`/collections`);
  }

  function handleCancel() {
    router.push(`/collections`);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <CirclePicker color={setColor} onChangeColor={handleChangeColor} />

      <StyledInput
        name="collectionName"
        required
        placeholder="Wie soll dein Kartenstapel heißen?"
        type="text"
        defaultValue={collection.name}
        textLength={collection.name}
      />
      <StyledButton type="submit">
        <IconWrapper>
          <FaCheck />
        </IconWrapper>
      </StyledButton>

      <StyledButton type="button" onClick={handleCancel}>
        <IconWrapper>
          <ImCancelCircle />
        </IconWrapper>
      </StyledButton>
    </StyledForm>
  );
}
