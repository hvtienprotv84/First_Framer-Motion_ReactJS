import MotionHoc from "./MotionHoc";
import styled from 'styled-components';

const ProjectsComponent = () => {
  return <div>
    <H1>Projects</H1>
    <H1>(Đang Phát Triển...)</H1>
  </div>
  ;
};

const Projects = MotionHoc(ProjectsComponent);

const H1 = styled.h1`
  text-align: center;

`;

export default Projects;
