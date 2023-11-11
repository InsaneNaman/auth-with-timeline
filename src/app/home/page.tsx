"use client";

import { useEffect, useState } from "react";

// api
import { getPosts } from "@/utils/api";

//components
import Post from "@/components/shared/Post";

// styles
import styles from "./index.module.css";

// types
import { TPost } from "@/@types/index";

function Home() {
  const [posts, setPosts] = useState<Array<TPost>>();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <p>
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
      <section>
        <h2>Create Post</h2>
        <div>
          <img />
          <textarea placeholder="How are you feeling today?" />
          <button>Post</button>
        </div>
      </section>
      <section>
        {posts.map((post) => (
          <Post post={post} timest key={post.id} />
        ))}
      </section>
    </div>
  );
}

export default Home;
