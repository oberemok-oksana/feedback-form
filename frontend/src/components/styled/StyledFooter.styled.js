import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #fafafa;
  border-top-color: #d8d8d8;
  min-height: 180px;
  position: relative;
  overflow: hidden;
  width: 100%;
  bottom: 0;

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 130px;
  }
`;

export default StyledFooter;
