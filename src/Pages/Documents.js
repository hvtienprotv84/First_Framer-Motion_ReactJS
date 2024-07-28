import MotionHoc from "./MotionHoc";
import styled from 'styled-components';

const DocumentsComponent = () => {
  return <div>
  <H1>Documents</H1>
  <H1>(Đang Phát Triển...)</H1>
</div>
};

const Documents = MotionHoc(DocumentsComponent);

const H1 = styled.h1`
  text-align: center;

`;

export default Documents;
