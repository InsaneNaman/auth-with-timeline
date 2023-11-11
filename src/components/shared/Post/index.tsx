import Image from "next/image";

// types
import { TPost } from "@/@types";

function Post({ post }: { post: TPost }) {
  return (
    <div>
      <div>
        <Image src={post.avatar} alt={post.authorName} width={40} height={40} />
        <div>
          <p>{post.authorName}</p>
          <p>
            {post.updatedAt.toString()}{" "}
            <span>{post.createdAt !== post.updatedAt ? "Edited" : ""}</span>
          </p>
        </div>
        <img alt="More options" />
      </div>
      <div>
        <div>{post.emoji}</div>
        <div>{post.content}</div>
      </div>
      <div>
        <img />
        <span>{post.totalComments.toString()} comments</span>
      </div>
    </div>
  );
}

export default Post;
