import React, { useContext } from "react";
import { translations } from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";
import CursorImg from '../img/cursor.jpg'
import { MainDiv, ProjTitle, WorkTitle2, WorkDivContainer, WorkDivText, WorkText1, WorkText2, WorkLink, WorkText3, WorkLink2, WorkImg } from "../../pages/styled-components/StyledComponents";

const Work = () => {
  const { currentLanguage } = useContext(LanguageContext);
  
  return(
    <main>
      <MainDiv>
        <section>
          <ProjTitle>{translations[currentLanguage].workTitle1}</ProjTitle>
          <WorkDivContainer>
            <WorkDivText>
              <WorkTitle2>{translations[currentLanguage].workTitle2}</WorkTitle2>
              <WorkText1>{translations[currentLanguage].workText1}</WorkText1>
              <WorkText2>{translations[currentLanguage].workText2} <WorkLink to='/'>{translations[currentLanguage].workText3}</WorkLink> {translations[currentLanguage].workText4} <WorkLink to='/project'>{translations[currentLanguage].workText3}</WorkLink>.</WorkText2>
              <WorkText3>{translations[currentLanguage].workText5} <WorkLink2 target="_blank" rel="noreferrer" href="https://github.com/Tetiana-Kozhukharenko">{translations[currentLanguage].workText6}</WorkLink2></WorkText3>
            </WorkDivText>
            <WorkImg src={CursorImg} alt="Cursor education" />
          </WorkDivContainer>
        </section>
      </MainDiv>
    </main>
  )
}
export default Work;