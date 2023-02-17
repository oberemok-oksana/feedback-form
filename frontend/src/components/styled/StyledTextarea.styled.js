import styled, { css } from "styled-components";

const StyledTextarea = styled.textarea`
  padding: 30px 45px;
  border: 2px solid #dcdcdc;
  border-radius: 10px;
  font-family: "Apercu Arabic Pro";
  font-size: 18px;
  color: #2d2d2d;

  @media (max-width: 992px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 600px) {
    padding: 25px;
  }

  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
      &:focus {
        border: 2px solid red;
        outline: none;
      }
    `}
`;

export default StyledTextarea;
