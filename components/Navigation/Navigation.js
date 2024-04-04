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

export default function Navigation() {
  const router = useRouter();
  return (
    <>
      <Space />
      <StyledNavigation>
        <StyledList>
          <StyledListItem>
            <StyledLink
              $isActive={router.pathname === "/collections"}
              href="/collections"
            >
              <IconWrapper>
                <BsCollectionFill />
              </IconWrapper>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              $isActive={router.pathname === "/create"}
              href="/create"
            >
              <IconWrapper>
                <MdOutlineAddCircleOutline />
              </IconWrapper>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              $isActive={router.pathname === "/archive"}
              href="/archive"
            >
              <IconWrapper>
                <RiArchive2Fill />
              </IconWrapper>
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledNavigation>
    </>
  );
}
