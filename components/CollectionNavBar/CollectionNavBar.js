import { BsCollectionFill } from "react-icons/bs";
import { RiArchive2Fill } from "react-icons/ri";
import { MdOutlineAddCircleOutline, MdDone } from "react-icons/md";
import NavBarButton from "../Navigation/NavBarButton";
import NavBar from "../Navigation/NavBar";

export default function CollectionNavbar({ id }) {
  return (
    <NavBar>
      <NavBarButton href="/collections" icon={<BsCollectionFill />} />
      <NavBarButton
        href={`/create?collection=${id}`}
        icon={<MdOutlineAddCircleOutline />}
      />
      <NavBarButton
        href={`/collections/${id}?archive=true`}
        icon={<RiArchive2Fill />}
      />
    </NavBar>
  );
}
