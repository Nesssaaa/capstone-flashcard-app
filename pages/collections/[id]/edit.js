import Form from "@/components/Form/Form";
import { useRouter } from "next/router";

export default function EditCollection({ getCard, editCard }) {
  const router = useRouter();
  const card = getCard(router.query.id);

  if (!card) {
    return "Error";
  }

  function onSubmit(data) {
    editCard({ ...data, id: card.id });
    router.push(`/`);
  }

  return (
    <>
      <h1>Bearbeite deinen Kartenstapel</h1>
      <Form onSubmit={onSubmit} card={card} />
    </>
  );
}