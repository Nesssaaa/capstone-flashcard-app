import { useRouter } from "next/router";
import {
  IconWrapper,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNavigation,
} from "./Navigation.styled";
import { MdOutlineAddCircleOutline, MdDone, MdHome } from "react-icons/md";

export default function Navigation() {
  const router = useRouter();
  return (
    <StyledNavigation>
      <StyledList>
        <StyledListItem isActive={router.pathname === "/"}>
          <StyledLink href="/">
            <IconWrapper>
              <MdHome />
            </IconWrapper>
          </StyledLink>
        </StyledListItem>
        <StyledListItem isActive={router.pathname === "/create"}>
          <StyledLink href="/create">
            <IconWrapper>
              <MdOutlineAddCircleOutline />
            </IconWrapper>
          </StyledLink>
        </StyledListItem>
        <StyledListItem isActive={router.pathname === "/archive"}>
          <StyledLink href="/archive">
            <IconWrapper>
              <MdDone />
            </IconWrapper>
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNavigation>
  );
}
