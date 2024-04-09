import { MdOutlineAddCircleOutline } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { RiArchive2Fill } from "react-icons/ri";
import NavBarButton from "./NavBarButton";
import NavBar from "./NavBar";

export default function Navigation() {
  return (
    <NavBar>
      <NavBarButton href="/collections" icon={<BsCollectionFill />} />
      <NavBarButton href="/create" icon={<MdOutlineAddCircleOutline />} />
      <NavBarButton href="/archive" icon={<RiArchive2Fill />} />
    </NavBar>
  );
}
