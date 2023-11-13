"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

//styles
import styles from "./index.module.css";

type Props = {
  toggleAuthModal: Function;
};

function Signup(props: Props) {
  const { toggleAuthModal } = props;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    // here we can check the data and call the api
    if (Object.keys(data).length) {
      router.push("/home");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.title}>SIGN UP</div>
      <div className={styles.subTitle}>Create an account to continue</div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className={styles.label}>
          Email or Username:
        </label>
        <input
          type="email"
          className={`${styles.formInput} ${errors.email ? "input-error" : ""}`}
          placeholder="Enter your email"
          aria-invalid={!!errors.email}
          {...register("email", {
            required: true,
            pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i, // email regex
          })}
        />

        <label htmlFor="username" className={styles.label}>
          Username:
        </label>
        <input
          type="text"
          className={`${styles.formInput} ${
            errors.username ? "input-error" : ""
          }`}
          placeholder="Username"
          {...register("username", {
            required: true,
            min: 6,
          })}
        />

        <label htmlFor="password" className={styles.label}>
          Password:
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className={`${styles.formInput} ${
            errors.password ? "input-error" : ""
          }`}
          {...register("password", { required: true, min: 8 })}
        />
        <input type="submit" className={`${styles.submitButton} submitBtn`} />
        <div className={styles.footer}>
          <span>Already have an account? </span>
          <span
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              e.key === "Enter" && toggleAuthModal();
            }}
            onClick={() => toggleAuthModal()}
            className={styles.footerRegister}
            aria-label="Login"
          >
            {`Login ->`}
          </span>
        </div>
      </form>
    </section>
  );
}

export default Signup;
