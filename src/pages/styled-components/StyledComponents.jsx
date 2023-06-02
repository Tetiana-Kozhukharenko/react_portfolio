import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainDiv = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 10px;
`;

//styles for NavMenu

export const HeaderNav = styled.header`
  background-color: #000;
  color: #fff;
  padding: 35px 45px;
  border-bottom: 1px solid rgb(255 255 0 / 28%);
  @media screen and (max-width: 1180px) {
    padding: 35px 10px;
  }
  @media screen and (max-width: 630px) {
    padding: 20px 10px;
  }
`;

export const DivContainer = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 630px) {
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (max-width: 540px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const NavText = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  @media screen and (max-width: 1180px) {
    font-size: 16px;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;


export const NavList = styled.ul`
  display: flex;
  gap: 70px;
  @media screen and (max-width: 1180px) {
    gap: 30px;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  color: #c4bdbd;
  &:active {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;

export const NavBtn1 = styled.button`
  background-color: transparent;
  margin-right: 20px;
  font-size: 17px;
  font-weight: 500;
  color: #c4bdbd;
  &:active {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;

export const NavBtn2 = styled.button`
  background-color: transparent;
  font-size: 17px;
  font-weight: 500;
  color: #c4bdbd;
  &:active {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;

//styles for Footer

export const FooterStyle = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 35px 45px;
  margin-top: 80px;
  @media screen and (max-width: 750px) {
    padding: 15px 45px;
  }
`;

export const FooterDiv = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FooterAddres = styled.address`
  font-style: normal;
  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

export const FooterLink = styled.a`
  color: #c4bdbd;
  &:active {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  gap: 90px;
  @media screen and (max-width: 550px) {
    gap: 50px;
  }
`;

export const FooterImg = styled.img`
  width: 40px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 550px) {
    width: 30px;
  }
`;

//styles for About

export const HeroSection = styled.section`
  background-color: #000;
  padding: 0 10px;
`;

export const AboutTitle = styled.h2`
  font-size: 48px;
  text-align: center;
  margin: auto;
  max-width: 570px;
  line-height: 70px;
  color: #e2e2e2;
  padding: 90px 0 50px;
  @media screen and (max-width: 700px) {
    font-size: 38px;
    padding: 40px 0 30px;
  }
  @media screen and (max-width: 540px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`;

export const SpanBlue = styled.span`
  color: #0000ff;
  font-weight: 500;
`;

export const SpanYellow = styled.span`
  color: #ffff00;
  font-weight: 500;
`;

export const AboutText = styled.p`
  color: #878787;
  font-size: 27px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 40px;
  padding-bottom: 90px;
  @media screen and (max-width: 700px) {
    font-size: 22px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

export const ProjectTitle = styled.h3`
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
  color: #515151;
  margin: 90px 0 60px;
  @media screen and (max-width: 700px) {
    font-size: 35px;
    margin: 50px 0 50px;
  }
   @media screen and (max-width: 540px) {
    font-size: 28px;
  }
`;

export const ProjectList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 80px;
  margin-bottom: 80px;
  @media screen and (max-width: 1221px) {
    display: block;
  }
`;

export const ProjectItem = styled.li`
  width:550px;
  transition: transform 0.7s ease;
  &:hover {
    transform: translate(0, -10px);
  }
  &:hover p {
    color: #000;
  }
  @media screen and (max-width: 1221px) {
    margin: 70px auto;
  }
   @media screen and (max-width: 700px) {
    text-align: center;
  }
  @media screen and (max-width: 585px) {
    max-width: 270px;
  }
`;

export const ProjectImg = styled.img`
  max-width: 550px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  @media screen and (max-width: 700px) {
    max-width: 400px
  }
  @media screen and (max-width: 585px) {
    max-width: 270px;
  }
`;

export const ProjectText = styled.p`
  color: #6b6b6b;
  font-size: 21px;
  text-align: center;
  padding-top: 20px;
  @media screen and (max-width: 700px) {
    max-width: 270px;
    margin: 0 auto;
  }
  @media screen and (max-width: 585px) {
    font-size: 18px;
  }
`;

//styles for Project

export const ProjTitle = styled.h2`
  text-transform: uppercase;
  font-size: 33px;
  text-align: center;
  color: #515151;
  margin: 90px 0 30px;
  @media screen and (max-width: 700px) {
    font-size: 28px;
  }
  @media screen and (max-width: 540px) {
    font-size: 24px;
    margin: 40px 0 30;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

export const ProjLinkText = styled.p`
  font-size: 25px;
  margin: 10px auto 60px;
  max-width: 450px;
  text-align: center;
  a {
    text-transform: uppercase;
    color: #999;
    &:hover {
      color: #606060;
   }
  @media screen and (max-width: 700px) {
    font-size: 28px;
  }
  @media screen and (max-width: 540px) {
    font-size: 23px;
  }
  @media screen and (max-width: 400px) {
    font-size: 19px;
  }
`;

export const ProjDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 90px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 60px;
  }
`;

export const ProjImg = styled.img`
  max-width: 550px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
  border-radius: 6px;
  transition: transform 0.7s ease;
  &:hover {
    transform: translate(0, -15px);
  }
  &:hover p {
    color: #000;
  }
  @media screen and (max-width: 900px) {
    max-width: 400px;
  }
  @media screen and (max-width: 450px) {
    max-width: 280px;
  }
`;

export const ProjText = styled.p`
  max-width: 450px;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  color: #8b8b8b;
  @media screen and (max-width: 900px) {
    max-width: 400px;
    font-size: 25px;
  }
  @media screen and (max-width: 700px) {
    &.change-order {
      order: 1;
    }
  }
  @media screen and (max-width: 450px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

export const ProjList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  @media screen and (max-width: 1100px) {
    justify-content: space-between;
    gap: 20px;
  }
  @media screen and (max-width: 870px) {
    flex-direction: column;
  }
`;

export const ProjItem = styled.li`
  max-width: 500px;
  font-size: 22px;
  line-height: 50px;
  color: #646161;
  @media screen and (max-width: 1100px) {
    max-width: 400px;
    font-size: 20px;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    line-height: 30px;
  }
`;

//styles for Skills

export const SkillsTitle = styled.h2`
  font-size: 38px;
  text-align: center;
  margin: 60px auto;
  color: #000;
  font-weight: 500;
  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 730px) {
    flex-direction: column;
  }
`;

export const SkillsItem = styled.li`
  color: #000;
  font-size: 24px;
  transition: transform 0.7s ease;
  &:hover {
    transform: translate(0, -10px);
    color: #606060;
  }
  @media screen and (max-width: 850px) {
    font-size: 20px;
  }
`;

export const SkillsTextB = styled.p`
  padding: 30px;
  border-radius: 50%;
  background-color: rgb(0 96 255 /62%);
  display: inline-block;
  margin: 0 -15px -22px 0;
  color: #ffff;
`;

export const SkillsTextY = styled.p`
  padding: 30px;
  border-radius: 50%;
  background-color: rgb(245 245 16 /62%);
  display: inline-block;
  margin: 0 -15px -22px 0;
  color: #ffff;
`;

export const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 400px;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  @media screen and (max-width: 730px) {
    margin: 0 auto;
    gap: 50px;
    box-shadow: none;
  }
  @media screen and (max-width: 450px) {
    width: 280px;
    padding: 30px 5px;
  }
`;

//styles for Contacts

export const ContactsText = styled.p`
  max-width: 450px;
  margin: 45px auto 40px;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  color: #8b8b8b;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
  margin-bottom: 30px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    transition: transform 0.7s ease;
    &:hover {
      transform: translate(0, -10px);
      color: #606060;
    }
  p {
    font-size: 22px;
    margin: 10px;
  }
  @media screen and (max-width: 700px) {
    margin: 0 auto;
    width: 200px;
  }
`;

export const ContactsLink = styled.a`
  max-width: 550px;
  text-align: center;
  margin: 0 auto 90px;
  display: block;
  color: #000;
  font-size: 25px;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    font-size: 17px;
    &:hover {
      color: #606060;
      transform: translate(0, -10px);
    }
  }
`;

//styles for Work

export const WorkTitle2 = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin: 30px 0;
`;

export const WorkDivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const WorkDivText = styled.div`
  max-width: 50%;
  @media screen and (max-width: 700px) {
    max-width: 90%;
  }
`;

export const WorkText1 = styled.p`
  font-size: 21px;
`;

export const WorkText2 = styled.p`
  font-size: 21px;
  margin: 30px 0;
`;

export const WorkLink = styled(Link)`
  text-transform: uppercase;
  color: #838181;
  &:hover {
    text-decoration: underline;
  }
`;
  
export const WorkText3 = styled.p`
  font-size: 21px;
`;

export const WorkLink2 = styled.a`
  text-transform: uppercase;
  color: #838181;
  &:hover {
    text-decoration: underline;
  }
`;

export const WorkImg = styled.img`
  max-width: 30%;
  @media screen and (max-width: 700px) {
    order: -1;
  }
`;
