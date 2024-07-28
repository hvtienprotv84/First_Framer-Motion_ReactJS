import MotionHoc from "./MotionHoc";
import styled from 'styled-components';

const CalenderComponent = () => {
  return <div>
  <H1>Calender</H1>
  <H1>(Đang Phát Triển...)</H1>
</div>
};

const Calender = MotionHoc(CalenderComponent);
const H1 = styled.h1`
  text-align: center;

`;
export default Calender;
