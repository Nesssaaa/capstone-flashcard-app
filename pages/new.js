import Form from "../components/Form/Form";

export default function NewPage({ addCard }) {
  return (
    <>
      <Form onSubmit={addCard} />
    </>
  );
}
