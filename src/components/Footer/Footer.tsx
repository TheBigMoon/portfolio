import React from "react";
import telegram from '../../multimedia/telegram.png';
import phone from '../../multimedia/phone.png';
import gmail from '../../multimedia/gmail.png';
import {FooterBlock, FooterImg, FooterLink, StyledFooter} from "../../styledComponents/StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterImg src={telegram} alt=""/>
      <FooterBlock>
        <FooterLink target="_blank" rel="noopener noreferrer" href='https://t.me/fist_off'>
          @Fist_off
        </FooterLink>
      </FooterBlock>
      <FooterImg src={gmail} alt=""/>
      <FooterBlock>
        Danium.kulakov@gmail.com
      </FooterBlock>
      <FooterImg src={phone} alt=""/>
      <FooterBlock>
        380632786151
      </FooterBlock>
    </StyledFooter>
  )
}

export default Footer;