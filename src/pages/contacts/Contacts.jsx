import React, { useContext } from "react";
import { translations } from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";
import GithubIcon2 from "../../pages/img/github2.png";
import InstagramIcon2 from "../../pages/img/instagram2.png";
import FacebookIcon2 from "../../pages/img/facebook2.png";
import { MainDiv, ProjectTitle, ContactsText, ContactsList, ContactItem, ContactsLink } from "../../pages/styled-components/StyledComponents";

const Contacts = () => {
  const { currentLanguage } = useContext(LanguageContext);
  return(
    <main>
      <MainDiv>
        <section>
          <ProjectTitle>{translations[currentLanguage].contacts}</ProjectTitle>
          <ContactsText>{translations[currentLanguage].contactsText1}</ContactsText>
          <ContactsList>
            <ContactItem>
              <a target="_blank" rel="noreferrer" href="https://github.com/Tetiana-Kozhukharenko">
                <img src={GithubIcon2} alt="Github" />
                <p>Github</p>
              </a>
            </ContactItem>
            <ContactItem>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tania_lupan/">
                <img src={InstagramIcon2} alt="Instagram" />
                <p>Instagram</p>
              </a>
            </ContactItem>
            <ContactItem>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100033669783031">
                <img src={FacebookIcon2} alt="Facebook" />
                <p>Facebook</p>
              </a>
            </ContactItem>
          </ContactsList>
          <ContactsText>{translations[currentLanguage].contactsText2}</ContactsText>
          <ContactsLink href="mailto:taniakozhukharenko@gmail.com">taniakozhukharenko@gmail.com</ContactsLink>
        </section>
      </MainDiv>
    </main>
  )
}
export default Contacts;