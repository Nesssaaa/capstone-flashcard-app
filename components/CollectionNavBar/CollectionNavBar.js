import { BsCollectionFill } from "react-icons/bs";
import { RiArchive2Fill } from "react-icons/ri";
import { MdOutlineAddCircleOutline, MdDone } from "react-icons/md";
import NavBarButton from "../Navigation/NavBarButton";
import NavBar from "../Navigation/NavBar";

export default function CollectionNavbar({ id }) {
  return (
    <NavBar>
      <NavBarButton
        aria-label="hier gelangst du zu den Kartenstapeln"
        href="/collections"
        icon={<BsCollectionFill />}
      />
      <NavBarButton
        aria-label="Erstelle zum ausgewählten Kartenstapel neue Lernkarten"
        href={`/create?collection=${id}`}
        icon={<MdOutlineAddCircleOutline />}
      />
      <NavBarButton
        aria-label="hier gelangst du zum Archiv des ausgewählten Kartenstapels"
        href={`/collections/${id}?archive=true`}
        icon={<RiArchive2Fill />}
      />
    </NavBar>
  );
}
