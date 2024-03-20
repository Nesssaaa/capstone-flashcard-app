import { useRouter } from "next/router";
import CollectionForm from "@/components/CollectionForm/CollectionForm";
import styled from "styled-components";

export const StyledH1 = styled.h1`
  text-align: center;
`;

export default function EditCollectionPage({
  getCollection,
  editCollection,
  collections,
  addCollection,
}) {
  const router = useRouter();
  const collection = getCollection(router.query.id);

  if (!collection) {
    return "Error";
  }

  function onSubmit(data) {
    editCollection({ ...data, id: collection.id });
  }

  return (
    <>
      <StyledH1>Bearbeite deinen Kartenstapel</StyledH1>
      <CollectionForm
        onSubmit={onSubmit}
        collection={collection}
        collections={collections}
        addCollection={addCollection}
        editCollection={editCollection}
      />
    </>
  );
}
