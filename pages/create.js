import Form from "../components/Form/Form";

export default function NewPage({ addCard, collections }) {
  return <Form onSubmit={addCard} collections={collections} />;
}
