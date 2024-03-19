import CollectionContainer from "../CollectionContainer/CollectionContainer";

export default function CollectionList({ collections, deleteCollection }) {
  return (
    <>
      {collections &&
        collections.map((collection) => (
          <div key={collection.id}>
            <CollectionContainer
              name={collection.name}
              id={collection.id}
              deleteCollection={deleteCollection}
            />
          </div>
        ))}
    </>
  );
}
