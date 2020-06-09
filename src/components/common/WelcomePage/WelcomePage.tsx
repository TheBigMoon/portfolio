import React from "react";
import s from './WelcomePage.module.css';

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
        <button>
          Enter
        </button>
      </div>
    </div>
  )
}

export default WelcomePage;