import { useRouter } from "next/router";
import CollectionForm from "@/components/CollectionForm/CollectionForm";
import styled from "styled-components";
import { StyledHeadlines } from "@/components/Headline.styled";

export const StyledH1 = styled.h1`
  text-align: center;
`;

export default function EditCollectionPage({ getCollection, editCollection }) {
  const router = useRouter();
  const collection = getCollection(router.query.id);

  if (!collection) {
    return "Error";
  }

  return (
    <>
      <StyledHeadlines>Bearbeite deinen Kartenstapel</StyledHeadlines>
      <CollectionForm
        arial-label="Mit diesem Formular bearbeitest du deinen Kartenstapel"
        collection={collection}
        editCollection={editCollection}
      />
    </>
  );
}
