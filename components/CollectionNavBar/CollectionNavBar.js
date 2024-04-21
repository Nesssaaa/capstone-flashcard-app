import { BsCollectionFill } from "react-icons/bs";
import { RiArchive2Fill } from "react-icons/ri";
import { MdOutlineAddCircleOutline, MdDone } from "react-icons/md";
import NavBarButton from "../Navigation/NavBarButton";
import NavBar from "../Navigation/NavBar";
import { useRouter } from "next/router";

export default function CollectionNavbar({ id }) {
  const router = useRouter();
  const isArchivePage = router.query["archive"] === "true";

  return (
    <NavBar>
      <NavBarButton href="/collections" icon={<BsCollectionFill />} />
      <NavBarButton
        href={`/create?collection=${id}`}
        icon={<MdOutlineAddCircleOutline />}
      />
      {!isArchivePage && (
        <NavBarButton
          href={`/collections/${id}?archive=true`}
          icon={<RiArchive2Fill />}
        />
      )}
      {isArchivePage && (
        <NavBarButton href={`/archive`} icon={<RiArchive2Fill />} />
      )}
    </NavBar>
  );
}
