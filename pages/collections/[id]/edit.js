import { useRouter } from "next/router";
import CollectionForm from "@/components/CollectionForm/CollectionForm";
import styled from "styled-components";
import { StyledHeadlines } from "@/components/Headline.styled";

export const StyledH1 = styled.h1`
  text-align: center;
`;

export default function EditCollectionPage({
  getCollection,
  editCollection,
  collections,
  addCollection,
  cards,
}) {
  const router = useRouter();
  const collection = getCollection(router.query.id);
  const filteredCards = cards.filter(
    (card) => card.collection == router.query.id
  );

  if (!collection) {
    return "Error";
  }

  function onSubmit(data) {
    editCollection({ ...data, id: collection.id });

    // router.push(`/`);
  }

  return (
    <>
      <StyledHeadlines>Bearbeite deinen Kartenstapel</StyledHeadlines>
      <CollectionForm
        onSubmit={onSubmit}
        collection={collection}
        collections={collections}
        addCollection={addCollection}
        editCollection={editCollection}
        cards={filteredCards}
      />
    </>
  );
}
