import {
  StyledNavigation,
  StyledList,
  StyledListItem,
  StyledLink,
  IconWrapper,
  Space,
} from "./CollectionNavBar.styled";

import { BsCollectionFill } from "react-icons/bs";
import { RiArchive2Fill } from "react-icons/ri";
import { MdOutlineAddCircleOutline, MdDone } from "react-icons/md";

export default function CollectionNavbar({ id }) {
  return (
    <>
      <Space />
      <StyledNavigation>
        <StyledList>
          <StyledListItem>
            <StyledLink href="/collections">
              <IconWrapper>
                <BsCollectionFill />
              </IconWrapper>
            </StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink href={`/create`}>
              <IconWrapper>
                <MdOutlineAddCircleOutline />
              </IconWrapper>
            </StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink href={`/collections/${id}?archive=true`}>
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
