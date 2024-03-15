import CollectionContainer from "../CollectionContainer/CollectionContainer";

export default function CollectionList({ collections }) {
  return (
    <>
      {collections &&
        collections.map((collection) => (
          <div key={collection.id}>
            <CollectionContainer name={collection.name} id={collection.id} />
          </div>
        ))}
    </>
  );
}
