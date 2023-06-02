import React, { useContext } from "react";
import { translations } from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

import { DivContainer, HeaderNav, NavText, NavList, NavLink, NavBtn1, NavBtn2 } from "../../pages/styled-components/StyledComponents";

const NavMenu = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  return(
      <HeaderNav>
        <DivContainer>
          <NavText>{translations[currentLanguage].name}</NavText>
          <nav>
            <NavList>
              <li>
                <NavLink to='/'>{translations[currentLanguage].about}</NavLink>
              </li>
              <li>
                <NavLink to='/project'>{translations[currentLanguage].project}</NavLink>
              </li>
             <li>
                <NavLink to='/skills'>{translations[currentLanguage].skills}</NavLink>
              </li>
              <li>
                <NavLink to='/work'>{translations[currentLanguage].work}</NavLink>
              </li>
              <li>
                <NavLink to='/contacts'>{translations[currentLanguage].contacts}</NavLink>
              </li>
            </NavList>
          </nav>
          <div>
            <NavBtn1 onClick={() => handleLanguageChange("en")}>En</NavBtn1>
            <NavBtn2 onClick={() => handleLanguageChange("uk")}>Ua</NavBtn2>
          </div>
        </DivContainer>
      </HeaderNav>
  )
}
export default NavMenu;