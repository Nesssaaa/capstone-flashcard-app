import CardButton from "../CardButton/CardButton";
import { useRouter } from "next/router";

export default function ButtonNavBar({ id }) {
  const router = useRouter();

  function onEdit() {
    console.log("clicked");
    router.push(`/cards/${id}/edit`);
  }

  return (
    <>
      <CardButton onClick={onEdit}>Bearbeiten</CardButton>
      <CardButton>Löschen</CardButton>
    </>
  );
}
