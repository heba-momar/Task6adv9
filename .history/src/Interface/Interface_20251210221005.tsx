import type { LinkItem } from "../type/Link";
import type { Detail, Post } from "../type/post";
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
export interface AllBlogPosts {
  postsToShow: number;
  showPagination: boolean;
  customCardProps: boolean;
}
export interface PaginationButtonProps {
  direction: "next" | "prev";
  onClick: () => void;
  disabled: boolean;
}
export interface SpeechReaderProps {
  post: Post;
}
export interface DetailsSection{
 details?: Post["details"] 
}
export interface StoriesAndInterviewsProps {
    pargraphSize: string;
}
export interface ReadingTimeProps {
  details: Detail[] | undefined;
}
export interface DescriptionSection{
  description:string[]
}
export interface HeaderSection{
  blog:Post
}
export interface Paragraphs {
  type: string;
  text: string | string[];
  span?: string;
  spanStyle?: string;
}
export interface Footers{
  links: LinkItem[];
  year: string;
}