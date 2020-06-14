import React from 'react';
import { NavItem, StyledHeader } from '../../styledComponents/StyledHeader';

const Header = () => (
  <StyledHeader>
    <NavItem exact to={'/posts'}>
      Posts
    </NavItem>
  </StyledHeader>
);

export default Header;