import React from "react";
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
      <NavLink activeClassName={s.activeLink} to={'/main'}>
        Main
      </NavLink>
      <NavLink activeClassName={s.activeLink} to={'/posts'}>
        Posts
      </NavLink>
    </div>
  )
}

export default Header;