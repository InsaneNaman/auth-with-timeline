//components
import Login from "@/components/shared/Login";

//styles
import styles from "./index.module.css";

export default function Index() {
  return (
    <main className={styles.container}>
      <img src="/brand.svg" alt="brand logo" />
      <Login />
    </main>
  );
}
