import React from "react";
import s from './WelcomePage.module.css';
import {NavLink} from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className={s.area}>
      <ul className={s.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className={s.welcome}>
        <p className={s.title}>
          Welcome!
        </p>
        <p>This is my simple web application.</p>
        <NavLink className={s.enter} to={'/posts'}>
          <p>ENTER</p>
        </NavLink>
      </div>
    </div>
  )
}

export default WelcomePage;