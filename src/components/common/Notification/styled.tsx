import styled from 'utils/styled';
import { Link }from 'react-router-dom';

export const StyledLinkRouter = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: inherit;
  }
`;