import styled from "styled-components";

const StyledMain = styled.section`
  padding-left: 145px;
  overflow: hidden;
  height: 100%;
  background: url("/images/Mask.svg");
  background-position: right;
  background-repeat: no-repeat;
  min-height: 928px;

  @media (max-width: 992px) {
    padding-left: 40px;
  }

  @media (max-width: 600px) {
    padding-left: 20px;
  } ;
`;

export default StyledMain;
