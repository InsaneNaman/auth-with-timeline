"use client";
import { useState } from "react";

//components
import Login from "@/components/shared/Login";
import Signup from "@/components/shared/Signup";

//styles
import styles from "./index.module.css";

export default function Index() {
  // If we need to change the behavior of the action like changing the route then it will be done here using toggleAuthModel
  const [authModal, toggleAuthModal] = useState("login");
  return (
    <main className={styles.container}>
      <img className={styles.brandLogo} src="/brand.svg" alt="brand logo" />
      <div className={styles.authContainer}>
        {authModal === "login" ? (
          <Login toggleAuthModal={() => toggleAuthModal("signup")} />
        ) : (
          <Signup toggleAuthModal={() => toggleAuthModal("login")} />
        )}
      </div>
    </main>
  );
}
