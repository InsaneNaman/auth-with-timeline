// mock
import { mockPosts, mockUserDetails } from "@/mockjs";

export const getPosts = () => {
  return Promise.resolve(mockPosts);
};

export const getUserdetails = () => {
  return Promise.resolve(mockUserDetails);
};
