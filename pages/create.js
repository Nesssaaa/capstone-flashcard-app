import Form from "../components/Form/Form";
import Navigation from "../components/Navigation/Navigation";

export default function NewPage({ addCard, collections, addCollection }) {
  return (
    <>
      <Form
        onSubmit={addCard}
        collections={collections}
        addCollection={addCollection}
      />
      <Navigation />
    </>
  );
}
