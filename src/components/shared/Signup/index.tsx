"use client";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Enter your email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", {
          required: true,
          pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i,
        })}
      />
      <input
        type="text"
        placeholder="username"
        {...register("username", {
          required: true,
          min: 6,
        })}
      />
      <input
        type="password"
        placeholder="Choose a strong"
        {...register("password", { required: true, min: 8 })}
      />
      <input type="submit" />
    </form>
  );
}

export default Signup;
