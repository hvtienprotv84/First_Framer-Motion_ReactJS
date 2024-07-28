import MotionHoc from "./MotionHoc";
import styled from 'styled-components';

const HomeComponent = () => {
  return <>
  <Wrapper>
    <TitleHome>Home</TitleHome>
    <Welcome>Huỳnh Vĩnh Tiến</Welcome>
    <Major>Front-End Developer</Major>
  </Wrapper>
  
  </>;
};

const Home = MotionHoc(HomeComponent);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-top: -150px;

`;

const TitleHome = styled.h1`
`;

const Welcome = styled.p`
  font-size: 150px;
  -webkit-text-stroke: .1rem black;
  font-weight: bold;
  color: transparent;
  width: max-content;
  text-align: center;
  margin: 0 auto;
`;

const Major = styled.p`
  font-size: 130px;
  -webkit-text-stroke: .1rem black;
  font-weight: bold;
  color: transparent;
  width: max-content;
  text-align: center;
  margin: 0 auto;
`;



export default Home;
