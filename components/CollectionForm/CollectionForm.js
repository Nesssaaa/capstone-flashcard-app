import {
  StyledButton,
  StyledForm,
  StyledInput,
  IconWrapper,
} from "./CollectionForm.styled";
import { FaCheck } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useRouter } from "next/router";
import { useState } from "react";
import CollectionContainer from "../CollectionContainer/CollectionContainer";
import Circle from "@uiw/react-color-circle";

export default function CollectionForm({ collection, editCollection }) {
  const [currentCollection, setCurrentCollection] = useState(collection);
  const router = useRouter();

  function handleChangeColor(color) {
    setCurrentCollection({
      id: currentCollection.id,
      name: currentCollection.name,
      color: color.hex,
    });
  }

  function handleChangeName(event) {
    setCurrentCollection({
      id: currentCollection.id,
      name: event.target.value,
      color: currentCollection.color,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));

    event.target.reset();
    editCollection({
      id: currentCollection.id,
      name: data.collectionName,
      color: currentCollection.color,
    });
    router.push(`/collections`);
  }

  function handleCancel() {
    router.push(`/collections`);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <CollectionContainer
        name={currentCollection.name}
        color={currentCollection.color}
        id={currentCollection.id}
      />
      <Circle
        colors={[
          "#FF0000",
          "#FFFF00",
          "#008000",
          "#48D1CC",
          "#7B68BB",
          "#FF69B4",
        ]}
        onChange={handleChangeColor}
      />

      <StyledInput
        aria-label="Wie soll dein Kartenstapel heißen?"
        name="collectionName"
        required
        placeholder="Wie soll dein Kartenstapel heißen?"
        type="text"
        defaultValue={currentCollection.name}
        textLength={currentCollection.name}
        onChange={handleChangeName}
      />
      <nav>
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
      </nav>
    </StyledForm>
  );
}
