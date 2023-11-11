export type TPost = {
  authorName: string;
  avatar: string;
  content: string;
  createdAt: Number;
  id: string;
  totalComments: Number; // We can have 1000 comments per post and prefetching all comments might overburden the system
  updatedAt: Number;
  emoji: string;
};
