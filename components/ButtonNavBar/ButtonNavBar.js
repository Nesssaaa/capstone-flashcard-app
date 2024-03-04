import CardButton from "../CardButton/CardButton";
import { useRouter } from "next/router";
import { StyledButtonNavBar } from "./ButtonNavBar.styled";

export default function ButtonNavBar({ id }) {
  const router = useRouter();

  function onEdit() {
    router.push(`/cards/${id}/edit`);
  }

  return (
    <StyledButtonNavBar>
      <CardButton onClick={onEdit}>Bearbeiten</CardButton>
    </StyledButtonNavBar>
  );
}
