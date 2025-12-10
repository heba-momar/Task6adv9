import type { Post } from "../type/post";
export  interface RecentPostsProps {
  postsCount: number;
  isBlogDetails: boolean;
}
export interface BlogCardProps {
  blog: Post;
  cardContainerClass?: string;
  imgClass?: string;
  titleClass?: string;
  pargClass?: string;
  lineClamp?: string;
}