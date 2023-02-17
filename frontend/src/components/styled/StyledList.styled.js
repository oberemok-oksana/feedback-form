import styled from "styled-components";

const StyledList = styled.ul`
  padding-left: 25%;
  padding-top: 79px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  gap: 25px;
  z-index: 5;
  position: relative;

  @media (max-width: 600px) {
    padding-top: 0;
    justify-content: center;
    padding-left: 0;
  }
`;

export default StyledList;
