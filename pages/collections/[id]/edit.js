import { useRouter } from "next/router";

export default function EditCollection({ getCollection }) {
  const router = useRouter();
  const collection = getCollection(router.query.id);

  if (!collection) {
    return "Error";
  }

  return (
    <>
      <h1>Bearbeite deinen Kartenstapel</h1>
      <p>hier muss eine eigene Form-Komponente noch aufgerufen werden</p>
    </>
  );
}
