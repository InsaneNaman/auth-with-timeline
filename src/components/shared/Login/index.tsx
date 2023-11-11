"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    router.push("/home");
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enter your email or username"
        aria-invalid={!!errors.email}
        {...register("email", {
          required: true,
        })}
      />

      <input
        type="password"
        placeholder="Enter your password"
        {...register("password", { required: true, min: 8 })}
      />
      <input type="submit" />
    </form>
  );
}

export default Login;
