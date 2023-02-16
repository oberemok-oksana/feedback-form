import StyledButton from "./styled/StyledButton.styled";
import StyledForm from "./styled/StyledForm.styled";
import StyledInput from "./styled/StyledInput.styled";
import StyledTextarea from "./styled/StyledTextarea.styled";

const Form = () => {
  return (
    <StyledForm>
      <StyledInput type="text" placeholder="Your name*" />
      <StyledInput type="email" placeholder="Your e-mail*" />
      <StyledTextarea cols="30" rows="6" placeholder="Your message*" />
      <StyledButton type="submit">Send message</StyledButton>
    </StyledForm>
  );
};

export default Form;
