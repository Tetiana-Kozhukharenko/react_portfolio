import React, { useContext } from "react";
import { translations } from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";
import HW20 from "../../pages/img/20.png";
import HW19 from "../../pages/img/19.png";
import HW18 from "../../pages/img/18.png";
import HW13 from "../../pages/img/13.png";
import HW12 from "../../pages/img/12.png";
import HW10 from "../../pages/img/10.png";
import { MainDiv, HeroSection, AboutTitle, SpanBlue, SpanYellow, AboutText, ProjectTitle, ProjectList, ProjectItem, ProjectImg, ProjectText } from "../../pages/styled-components/StyledComponents";

const About = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return(
    <main>
      <HeroSection>
        <AboutTitle>{translations[currentLanguage].aboutTitle} <SpanBlue>{translations[currentLanguage].aboutTitle2}</SpanBlue><SpanYellow>{translations[currentLanguage].aboutTitle3}</SpanYellow></AboutTitle>
        <AboutText>{translations[currentLanguage].aboutText}</AboutText>
      </HeroSection>
      <MainDiv>
        <section>
          <ProjectTitle>{translations[currentLanguage].myProjects}</ProjectTitle>
          <ProjectList>
            <ProjectItem>
              <a target="_blank" rel="noreferrer" href="https://tetiana-kozhukharenko.github.io/react_styled_app/"><ProjectImg src={HW20} alt="React app" /></a>
              <ProjectText>{translations[currentLanguage].projectsText1}</ProjectText>
            </ProjectItem>
            <ProjectItem>
              <a target="_blank" rel="noreferrer" href="https://tetiana-kozhukharenko.github.io/react_spa/"><ProjectImg src={HW19} alt="React app" /></a>
              <ProjectText>{translations[currentLanguage].projectsText2}</ProjectText>
            </ProjectItem>
            <ProjectItem>
              <a target="_blank" rel="noreferrer" href="https://tetiana-kozhukharenko.github.io/cursor-education/homework%2010/index.html"><ProjectImg src={HW10} alt="React app" /></a>
              <ProjectText>{translations[currentLanguage].projectsText3}</ProjectText>
            </ProjectItem>
            <ProjectItem>
              <a target="_blank" rel="noreferrer" href="https://tetiana-kozhukharenko.github.io/cursor-education/homework%2013/index.html"><ProjectImg src={HW13}alt="React app" /></a>
              <ProjectText>{translations[currentLanguage].projectsText4}</ProjectText>
            </ProjectItem>
            <ProjectItem>
              <a target="_blank" rel="noreferrer" href="https://tetiana-kozhukharenko.github.io/class_components/"><ProjectImg src={HW18} alt="React app" /></a>
              <ProjectText>{translations[currentLanguage].projectsText5}</ProjectText>
            </ProjectItem>
            <ProjectItem>
              <a target="_blank" rel="noreferrer" href="https://tetiana-kozhukharenko.github.io/cursor-education/homework%2012/index.html"><ProjectImg src={HW12} alt="React app" /></a>
              <ProjectText>{translations[currentLanguage].projectsText6}</ProjectText>
            </ProjectItem>
          </ProjectList>
        </section>
      </MainDiv>
    </main>
  )
}
export default About;