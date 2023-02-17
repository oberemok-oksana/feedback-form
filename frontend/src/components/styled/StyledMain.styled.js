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
    padding-left: 60px;
    padding-right: 60px;
    min-height: 600px;
  }
`;

export default StyledMain;
