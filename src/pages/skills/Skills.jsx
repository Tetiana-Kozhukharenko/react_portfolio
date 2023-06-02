import React, { useContext } from "react";
import { translations } from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";
import { MainDiv, SkillsTitle, SkillsList, SkillsDiv, SkillsItem, SkillsTextB, SkillsTextY } from "../../pages/styled-components/StyledComponents";

const Skills = () => {
  const { currentLanguage } = useContext(LanguageContext);
  return(
    <main>
        <MainDiv>
          <section>
            <SkillsTitle>{translations[currentLanguage].skillsTitle1}</SkillsTitle>
            <SkillsList>
              <SkillsDiv>
                <SkillsItem><SkillsTextB></SkillsTextB>HTML</SkillsItem>
                <SkillsItem><SkillsTextB></SkillsTextB>CSS</SkillsItem>
                <SkillsItem><SkillsTextB></SkillsTextB>JS</SkillsItem>
                <SkillsItem><SkillsTextB></SkillsTextB>Node.js</SkillsItem>
                <SkillsItem><SkillsTextB></SkillsTextB>Webpack</SkillsItem>
              </SkillsDiv>
              <SkillsDiv>
                <SkillsItem><SkillsTextB></SkillsTextB>React</SkillsItem>
                <SkillsItem><SkillsTextB></SkillsTextB>React Router</SkillsItem>
                <SkillsItem><SkillsTextB></SkillsTextB>Styled Components</SkillsItem>
                <SkillsItem><SkillsTextB></SkillsTextB>Git</SkillsItem>
                <SkillsItem><SkillsTextB></SkillsTextB>Github</SkillsItem>
              </SkillsDiv>
            </SkillsList>
            </section>
        </MainDiv>
      <MainDiv>
          <section>
          <SkillsTitle>{translations[currentLanguage].skillsTitle2}</SkillsTitle>
          <SkillsList>
            <SkillsDiv>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText1}</SkillsItem>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText2}</SkillsItem>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText3}</SkillsItem>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText4}</SkillsItem>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText5}</SkillsItem>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText6}</SkillsItem>
            </SkillsDiv>
            <SkillsDiv>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText7}</SkillsItem>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText8}</SkillsItem>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText9}</SkillsItem>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText10}</SkillsItem>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText11}</SkillsItem>
              <SkillsItem><SkillsTextY></SkillsTextY>{translations[currentLanguage].skillsText12}</SkillsItem>
            </SkillsDiv>
          </SkillsList>
        </section>
      </MainDiv>
    </main>
  )
}
export default Skills;