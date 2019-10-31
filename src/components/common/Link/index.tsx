import React from 'react';
import { LinkProps } from 'react-router-dom';

import { StyledLinkRouter } from './styled';

const DefaultLink: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <StyledLinkRouter to={to}>{children}</StyledLinkRouter>
  );
};

export default React.memo(DefaultLink);
