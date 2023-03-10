import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StyledButton from "./styled/StyledButton.styled";
import StyledForm from "./styled/StyledForm.styled";
import StyledInput from "./styled/StyledInput.styled";
import StyledTextarea from "./styled/StyledTextarea.styled";

const Form = () => {
  const notify = () =>
    toast("🦄 Thank you for your feedback!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (feedback) => {
    fetch(`${import.meta.env.VITE_API_URL}/feedbacks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    }).then(() => {
      notify();
      reset();
    });
  };

  return (
    <>
      <ToastContainer />
      <StyledForm onSubmit={handleSubmit(submitForm)} noValidate>
        <StyledInput
          {...register("name", { required: true })}
          type="text"
          placeholder="Your name*"
          error={errors.name}
        />
        {errors.name ? <span>Name is required</span> : null}

        <StyledInput
          {...register("email", {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
            required: true,
          })}
          type="email"
          placeholder="Your e-mail*"
          error={errors.email}
        />
        {errors.email ? <span>Valid email is required</span> : null}

        <StyledTextarea
          {...register("message", { required: true })}
          cols="30"
          rows="6"
          placeholder="Your message*"
          error={errors.message}
        />
        {errors.message ? <span>Please fill in your message</span> : null}

        <StyledButton type="submit">Send message</StyledButton>
      </StyledForm>
    </>
  );
};

export default Form;
