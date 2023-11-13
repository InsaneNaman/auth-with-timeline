"use client";
import { useEffect, useState } from "react";

// api
import { getPosts, getUserdetails } from "@/utils/api";

//components
import Post from "@/components/shared/Post";
import useModal from "@/components/ui/Modal";
import Login from "@/components/shared/Login";
import Signup from "@/components/shared/Signup";

// styles
import styles from "./index.module.css";

// types
import { TPost, TUser } from "@/@types/index";

function Home() {
  const [posts, setPosts] = useState<Array<TPost>>([]); // user details can be put in global state or can be cached using react-query
  const [user, setUser] = useState<TUser>();
  const [authModal, toggleAuthModal] = useState("login");

  const { isOpen, openModal, closeModal, ModalComponent } = useModal();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await Promise.all([getUserdetails(), getPosts()]); // avoiding case where any api can crash Should implement try catch to avoid those conditions
      setUser(response[0]);
      setPosts(response[1]);
    };
    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.postCreateContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Hello <span>{user?.name}</span>
          </h1>
          <button
            onClick={openModal}
            className={`submitBtn ${styles.loginBtn}`}
          >
            Login
          </button>

          {isOpen && (
            <ModalComponent>
              {authModal === "login" ? (
                <Login toggleAuthModal={() => toggleAuthModal("signup")} />
              ) : (
                <Signup toggleAuthModal={() => toggleAuthModal("login")} />
              )}
            </ModalComponent>
          )}
        </div>

        <p className={styles.subTitle}>
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>

        <section className={styles.createPostContainer}>
          <div className={styles.createPostTitle}>Create Post</div>
          <div className={styles.postInputContainer}>
            <div className={styles.chatIconContainer}>
              <img src="/chat.svg" alt="Chat icon" />
            </div>
            <textarea
              className={styles.postInput}
              placeholder="How are you feeling today?"
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={`${styles.postSubmitBtn} submitBtn`}>
              Post
            </button>
          </div>
        </section>
        <section>
          {posts.length &&
            posts.map((post) => <Post post={post} key={post.id} />)}
        </section>
      </div>
    </div>
  );
}

export default Home;
