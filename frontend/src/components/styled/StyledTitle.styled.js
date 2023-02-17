import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "Apercu Arabic Pro";
  color: #3e3e3e;
  font-size: 40px;

  @media (max-width: 992px) {
    z-index: 4;
    font-size: 30px;
  }

  @media (max-width: 600px) {
    width: 65%;
    margin: 10px 0;
  }
`;

export default StyledTitle;
