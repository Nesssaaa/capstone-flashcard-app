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
        <StyledListItem>
          <StyledLink isActive={router.pathname === "/"} href="/">
            <IconWrapper>
              <MdHome />
            </IconWrapper>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink isActive={router.pathname === "/create"} href="/create">
            <IconWrapper>
              <MdOutlineAddCircleOutline />
            </IconWrapper>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink isActive={router.pathname === "/archive"} href="/archive">
            <IconWrapper>
              <MdDone />
            </IconWrapper>
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNavigation>
  );
}
