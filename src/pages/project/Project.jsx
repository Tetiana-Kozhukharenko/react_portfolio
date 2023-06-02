import React, { useContext } from "react";
import { translations } from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";
import Publication1 from "../../pages/img/publication1.png";
import Form1 from "../../pages/img/form1.png";
import Form2 from "../../pages/img/form2.png";
import Publication2 from "../../pages/img/publication2.png";
import { MainDiv, ProjTitle, ProjDiv, ProjImg, ProjText, ProjList, ProjItem, ProjLinkText } from "../styled-components/StyledComponents";

const Project = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return(
    <main>
      <MainDiv>
        <section>
          <ProjTitle>{translations[currentLanguage].projectTitle}</ProjTitle>
          <ProjLinkText>{translations[currentLanguage].projectText1} <a target="_blank" rel="noreferrer" href="https://tetiana-kozhukharenko.github.io/react_redux_app/">{translations[currentLanguage].projectText2}</a></ProjLinkText>
          <ProjDiv>
            <ProjImg src={Publication1} alt="Posts" />
            <ProjText>{translations[currentLanguage].projectDescription1}</ProjText>
          </ProjDiv>
          <ProjDiv>
            <ProjText className="change-order" >{translations[currentLanguage].projectDescription2}</ProjText>
            <ProjImg src={Form1} alt="Form" />
          </ProjDiv>
          <ProjDiv>
            <ProjImg src={Form2} alt="Form" />
            <ProjText>{translations[currentLanguage].projectDescription3}</ProjText>
          </ProjDiv>
          <ProjDiv>
            <ProjText className="change-order">{translations[currentLanguage].projectDescription4}</ProjText>
            <ProjImg src={Publication2} alt="Posts" />
          </ProjDiv>
        </section>
        <section>
          <ProjTitle>{translations[currentLanguage].functionalTitle}</ProjTitle>
          <ProjList>
            <ProjItem>
              <p>{translations[currentLanguage].FunctionalText1}</p>
            </ProjItem>
            <ProjItem>
              <p>{translations[currentLanguage].FunctionalText2}</p>
            </ProjItem>
            <ProjItem>
              <p>{translations[currentLanguage].FunctionalText3}</p>
            </ProjItem>
            <ProjItem>
              <p>{translations[currentLanguage].FunctionalText4}</p>
            </ProjItem>
            <ProjItem>
              <p>{translations[currentLanguage].FunctionalText5}</p>
            </ProjItem>
            <ProjItem>
              <p>{translations[currentLanguage].FunctionalText6}</p>
            </ProjItem>
            <ProjItem>
              <p>{translations[currentLanguage].FunctionalText7}</p>
            </ProjItem>
          </ProjList>
        </section>
      </MainDiv>
    </main>
  )
}
export default Project;