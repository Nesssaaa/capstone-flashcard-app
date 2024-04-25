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
      {!isArchivePage && (
        <NavBarButton
          aria-label="Hier gelangst du zum Archiv des ausgewählten Kartenstapels"
          href={`/collections/${id}?archive=true`}
          icon={<RiArchive2Fill />}
        />
      )}
      {isArchivePage && (
        <NavBarButton
          aria-label="Hier gelangst du zum Archiv"
          href={`/archive`}
          icon={<RiArchive2Fill />}
        />
      )}
    </NavBar>
  );
}
