// mock
import { mockPosts } from "@/mockjs";

export const getPosts = () => {
  return Promise.resolve(mockPosts);
};
