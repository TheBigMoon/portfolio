import React from "react";
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to={'/main'}>
        Main
      </NavLink>
      <NavLink to={'/posts'}>
        Posts
      </NavLink>
    </div>
  )
}

export default Header;