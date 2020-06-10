import React from "react";
import s from './Footer.module.css'
import telegram from '../../multimedia/telegram.png';
import phone from '../../multimedia/phone.png';
import gmail from '../../multimedia/gmail.png';

const Footer = () => {
  return (
    <div className={s.footer}>
      <img src={telegram} alt=""/>
      <div>
        <a target="_blank" rel="noopener noreferrer" href='https://t.me/fist_off'>@Fist_off</a>
      </div>
      <img src={gmail} alt=""/>
      <div>
        Danium.kulakov@gmail.com
      </div>
      <img src={phone} alt=""/>
      <div>
        380632786151
      </div>
    </div>
  )
}

export default Footer;