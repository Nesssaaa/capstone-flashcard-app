import { MdOutlineAddCircleOutline } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { RiArchive2Fill } from "react-icons/ri";
import NavBarButton from "./NavBarButton";
import NavBar from "./NavBar";

export default function Navigation() {
  return (
    <NavBar>
      <NavBarButton
        aria-label="hier gelangst du zu den Kartenstapeln"
        href="/collections"
        icon={<BsCollectionFill />}
      />
      <NavBarButton
        aria-label="hier gelangst du zum Formular für neue Karten"
        href="/create"
        icon={<MdOutlineAddCircleOutline />}
      />
      <NavBarButton
        aria-label="hier gelangst du zum Archiv"
        href="/archive"
        icon={<RiArchive2Fill />}
      />
    </NavBar>
  );
}
