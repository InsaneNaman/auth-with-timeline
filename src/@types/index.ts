export type TPost = {
  authorName: string;
  avatar: string;
  content: string;
  createdAt: number;
  id: string;
  totalComments: number; // We can have 1000 comments per post and prefetching all comments might overburden the system
  updatedAt: number;
  emoji: string;
};

export type TUser = {
  id: number;
  name: string;
};
