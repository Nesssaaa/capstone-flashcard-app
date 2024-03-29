import {
  StyledNavigation,
  StyledList,
  StyledListItem,
  StyledLink,
  IconWrapper,
  Space,
} from "./CollectionNavBar.styled";

import { BsCollectionFill } from "react-icons/bs";
import { MdQuiz } from "react-icons/md";

export default function CollectionNavbar({ collection }) {
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
            <StyledLink href={`/collections/${collection.id}/quiz`}>
              <IconWrapper>
                <MdQuiz />
              </IconWrapper>
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledNavigation>
    </>
  );
}
