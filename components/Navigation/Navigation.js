import { useRouter } from "next/router";
import {
  IconWrapper,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNavigation,
  Space,
} from "./Navigation.styled";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { RiArchive2Fill } from "react-icons/ri";
import NavBarButton from "./NavBarButton";

export default function Navigation() {
  const router = useRouter();
  return (
    <>
      <Space />
      <StyledNavigation>
        <StyledList>
          <NavBarButton href="/collections" icon={<BsCollectionFill />} />

          <NavBarButton href="/create" icon={<MdOutlineAddCircleOutline />} />

          <NavBarButton href="/archive" icon={<RiArchive2Fill />} />
        </StyledList>
      </StyledNavigation>
    </>
  );
}
