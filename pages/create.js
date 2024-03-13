import Form from "../components/Form/Form";

export default function NewPage({ addCard, collections, addCollection }) {
  return (
    <Form
      onSubmit={addCard}
      collections={collections}
      addCollection={addCollection}
    />
  );
}
