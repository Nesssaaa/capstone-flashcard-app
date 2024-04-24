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
      timestamp: new Date(),
    });
    router.push(`/collections`);
  }

  function handleCancel() {
    router.push(`/collections`);
  }

  return (
    <StyledForm
      aria-label="Mit diesem Formular kannst du deinen Kartenstapel bearbeiten"
      onSubmit={handleSubmit}
    >
      <CollectionContainer
        collection={currentCollection}
        editCollection={editCollection}
      />
      <Circle
        colors={[
          "#db780de3",
          "#E5C5BD",
          "#E2A55E",
          "#5E718B",
          "#96AA9A",
          "#B4BFC5",
        ]}
        onChange={handleChangeColor}
      />

      <StyledInput
        id="collectionName"
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
        <StyledButton
          aria-label="Kartenstapel erstellen und speichern"
          type="submit"
        >
          <IconWrapper>
            <FaCheck />
          </IconWrapper>
        </StyledButton>

        <StyledButton
          aria-label="Den Vorgang des Erstellens abbrechen"
          type="button"
          onClick={handleCancel}
        >
          <IconWrapper>
            <ImCancelCircle />
          </IconWrapper>
        </StyledButton>
      </nav>
    </StyledForm>
  );
}
