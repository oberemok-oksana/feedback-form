import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 563px;
  gap: 8px;
  z-index: 5;
  position: relative;

  @media (max-width: 992px) {
    max-width: unset;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

export default StyledForm;
