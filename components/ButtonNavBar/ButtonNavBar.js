import CardButton from "../CardButton/CardButton";
export default function ButtonNavBar({ onEdit }) {
  return (
    <>
      <CardButton onclick={onEdit}>Bearbeiten</CardButton>
      <CardButton>Löschen</CardButton>
    </>
  );
}
