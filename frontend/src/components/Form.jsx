import { useState } from "react";
import StyledButton from "./styled/StyledButton.styled";
import StyledForm from "./styled/StyledForm.styled";
import StyledInput from "./styled/StyledInput.styled";
import StyledTextarea from "./styled/StyledTextarea.styled";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const changeName = () => {
    setName(e.target.value);
  };

  const changeEmail = () => {
    setEmail(e.target.value);
  };

  const changeMessage = () => {
    setMessage(e.target.value);
  };

  return (
    <StyledForm>
      <StyledInput
        value={name}
        onChange={changeName}
        type="text"
        placeholder="Your name*"
        required
      />
      <StyledInput
        value={email}
        onChange={changeEmail}
        type="email"
        placeholder="Your e-mail*"
        required
      />
      <StyledTextarea
        value={message}
        onChange={changeMessage}
        cols="30"
        rows="6"
        placeholder="Your message*"
        required
      />
      <StyledButton type="submit">Send message</StyledButton>
    </StyledForm>
  );
};

export default Form;
