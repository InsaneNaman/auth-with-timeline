import Image from "next/image";

import styles from "./index.module.css";

// types
import { TPost } from "@/@types";

//utils
import { parseInRelativeTime } from "@/utils/date";

function Post({ post }: { post: TPost }) {
  return (
    <div className={styles.container}>
      <div className={styles.postHeaderContainer}>
        <Image
          className={styles.authorImage}
          src={post.avatar}
          alt={post.authorName}
          width={40}
          height={40}
        />
        <div className={styles.authorDetailsContainer}>
          <span className={styles.author}>{post.authorName}</span>
          <span className={styles.subtleLabel}>
            {parseInRelativeTime(post.updatedAt)}{" "}
            <span>{post.createdAt !== post.updatedAt ? "• Edited" : ""}</span>
          </span>
        </div>
        <img src="/threedots.svg" alt="More options" />
      </div>
      <div className={styles.postContentContainer}>
        <div className={styles.emojiIconContainer}>
          <span className={styles.emoji}>{post.emoji}</span>
        </div>
        <div className={styles.content}>{post.content}</div>
      </div>
      <div className={styles.commentsContainer}>
        <img
          className={styles.commentsIcon}
          src="/comments.svg"
          alt="Comments Icon"
        />
        <span
          role="button"
          tabIndex={0}
          aria-label={`${post.totalComments.toString()} comments`}
          className={styles.subtleLabel}
        >
          {/* Clicking on comments can take the post id and make a GET request. This will allow to fetch comments on deemand */}
          {post.totalComments.toString()} comments
        </span>
      </div>
    </div>
  );
}

export default Post;
