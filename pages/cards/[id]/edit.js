import Form from "@/components/Form/Form";
import { useRouter } from "next/router";

export default function EditPage({ getCard, editCard }) {
  const router = useRouter();
  const card = getCard(router.query._id);

  if (!card) {
    return "Error";
  }

  function onSubmit(data) {
    editCard({ ...data, _id: card._id });
    router.push(`/`);
  }

  return (
    <>
      <h1>Bearbeite deine Flashcard</h1>
      <Form onSubmit={onSubmit} card={card} />
    </>
  );
}
