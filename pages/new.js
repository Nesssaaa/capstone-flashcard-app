import Form from "../components/Form/Form";

export default function NewPage() {
  return (
    <>
      <Form onSubmit={(data) => console.log(data)} />
    </>
  );
}
