import MotionHoc from "./MotionHoc";
import styled from "styled-components";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { SiVuetify } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGitlab } from "react-icons/si";
import { SiBitbucket } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiSvelte } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiYarn } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { SiJson } from "react-icons/si";
import { SiGithubpages } from "react-icons/si";

const TeamComponent = () => {
  return <>
  <Wrapper>
    <TitleHome>Skills</TitleHome>
    <ContainerIcon>
    <SiHtml5 />
    <SiCss3 />
    <SiJavascript />
    <SiTypescript />
    <SiReact />
    <SiRedux />
    <SiNextdotjs />
    <SiVuedotjs />
    <SiVuetify />
    <SiNuxtdotjs />
    <SiAngular />
    <SiTailwindcss />
    <SiJquery />
    <SiBootstrap />
    <SiSass />
    <SiStyledcomponents />
    <SiMui />
    <FaJava />
    <SiSpringboot />
    <SiCsharp />
    <SiDotnet />
    <SiPhp />
    <SiLaravel />
    <SiPython />
    <SiFlask />
    <SiDjango />
    <SiSqlite />
    <SiMicrosoftsqlserver />
    <SiMysql />
    <SiMongodb />
    <SiFirebase />
    <SiAndroidstudio />
    <SiNodedotjs />
    <SiExpress />
    <SiGit />
    <SiGithub />
    <SiGitlab />
    <SiBitbucket />
    <SiVercel />
    <SiDocker />
    <SiSvelte />
    <SiNpm />
    <SiYarn />
    <SiVite />
    <SiWebpack />
    <SiVisualstudio />
    <SiVisualstudiocode />
    <SiIntellijidea />
    <SiXampp />
    <SiJson />
    <SiGithubpages />
    <SiHtml5 />
    <SiAdobephotoshop />
    <SiFigma />

    </ContainerIcon>
  </Wrapper>
  
  </>;
};

const Team = MotionHoc(TeamComponent);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-top: -200px;

`;

// const Icon = styled(SiNuxtdotjs)`
//   width: 150px;  /* Kích thước của icon */
//   height: 150px; /* Kích thước của icon */
//   color: #00c58e; /* Màu sắc của icon (tùy chọn) */
// `;

// const Icon = styled(SiHtml5)`
//   width: 150px;  /* Kích thước của icon */
//   height: 150px; /* Kích thước của icon */
//   color: #00c58e; /* Màu sắc của icon (tùy chọn) */
// `;


const ContainerIcon = styled.div`
  display: flex;
  flex-wrap: wrap; /* Cho phép các icon xuống dòng khi cần */
  gap: 20px; /* Khoảng cách giữa các icon */
  justify-content: center; /* Canh giữa các icon */
  max-width: 1200px; /* Kích thước tối đa của container */
  margin: 0 auto; /* Canh giữa container theo chiều ngang */
  font-size: 65px;
  margin-top: 50px;

  :hover{
    color: white;
  }
`;

const TitleHome = styled.h1`
`;

export default Team;
