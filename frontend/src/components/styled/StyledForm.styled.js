import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 563px;
  gap: 8px;
  z-index: 5;
  position: relative;

  @media (max-width: 992px) {
    max-width: 450px;
  }

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;

export default StyledForm;
