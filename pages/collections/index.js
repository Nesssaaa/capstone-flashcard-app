import CollectionList from "../../components/CollectionList/CollectionList";

export default function CollectionsPage({ collections, cards }) {
  console.log(collections, cards);
  return (
    <>
      <h1>Deine Kartenstapel</h1>
      <br />
      <CollectionList collections={collections} />
    </>
  );
}
