import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #fad34f;
  cursor: pointer;
  color: #ffffff;
  padding: 25px 0;
  border-radius: 500px;
  max-width: 218px;
  font-family: "Apercu Arabic Pro";
  font-size: 18px;
  margin-top: 23px;
  border: none;

  &:hover {
    color: #222222;
    transition: all 0.5s ease;
  }

  @media (max-width: 600px) {
    padding: 15px;
  } ;
`;
export default StyledButton;
