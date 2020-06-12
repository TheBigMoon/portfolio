import React from "react";
import {NavItem, StyledHeader} from "../../styledComponents/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <NavItem exact to={'/posts'}>
        Posts
      </NavItem>
    </StyledHeader>
  )
}

export default Header;