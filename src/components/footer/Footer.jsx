import React from "react";
import GithubIcon from "../../pages/img/github.png";
import InstagramIcon from "../../pages/img/instagram.png";
import FacebookIcon from "../../pages/img/facebook.png";
import { FooterStyle, FooterDiv, FooterAddres, FooterLink, FooterList, FooterImg } from "../../pages/styled-components/StyledComponents";

const Footer = () => {
  
  return(
    <FooterStyle>
      <FooterDiv>
        <FooterAddres>
          <ul>
            <li>
              <FooterLink href="tel:+380981153071">+38 098 115 30 71</FooterLink>
            </li>
            <li>
              <FooterLink href="mailto:taniakozhukharenko@gmail.com">taniakozhukharenko@gmail.com</FooterLink>
            </li>
          </ul>
        </FooterAddres>
        <FooterList>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Tetiana-Kozhukharenko">
              <FooterImg src={GithubIcon} alt="Github" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tania_lupan/">
              <FooterImg src={InstagramIcon} alt="Instagram" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100033669783031">
              <FooterImg src={FacebookIcon} alt="Facebook" />
            </a>
          </li>
        </FooterList>
      </FooterDiv>
    </FooterStyle>
  )
}

export default Footer;