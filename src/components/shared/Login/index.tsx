"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

//styles
import styles from "./index.module.css";

type Props = {
  toggleAuthModal: Function;
};

function Login(props: Props) {
  const { toggleAuthModal } = props;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Adding any but need to dig deeper to find the right type
  const onSubmit = (data: any) => {
    if (Object.keys(data).length) {
      router.push("/home");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.title}>WELCOME BACK</div>
      <div className={styles.subTitle}>Log into your account</div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className={styles.label}>
          Email or Username:
        </label>
        <input
          type="text"
          placeholder="Enter your email or username"
          aria-invalid={!!errors.email}
          className={`${styles.formInput} ${errors.email ? "input-error" : ""}`}
          {...register("email", {
            required: true,
            pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i,
          })}
        />
        <div className={styles.passwordInput}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <span className={styles.forgetPasswordLabel}>Forget password?</span>
        </div>

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
          <span>Not registered yet?</span>
          <span
            role="button"
            aria-label="Register"
            tabIndex={0}
            onKeyDown={(e) => {
              e.key === "Enter" && toggleAuthModal();
            }}
            onClick={() => toggleAuthModal()}
            className={styles.footerRegister}
          >
            {`Register ->`}
          </span>
        </div>
      </form>
    </section>
  );
}

export default Login;
