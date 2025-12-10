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
export interface AllBlogPostses {
  postsToShow: number;
  showPagination: boolean;
  customCardProps: boolean;
}
export interface PaginationButtonProps {
  direction: "next" | "prev";
  onClick: () => void;
  disabled: boolean;
}
export interface SpeechReaderPropses {
  post: Post;
}
export interface DetailsSections{
 details?: Post["details"] 
}
export interface StoriesAndInterviewsPropses {
    pargraphSize: string;
}
export interface ReadingTimePropes {
  details: Detail[] | undefined;
}
export interface DescriptionSections{
  description:string[]
}
export interface HeaderSections{
  blog:Post
}
export interface Paragraphses {
  type: string;
  text: string | string[];
  span?: string;
  spanStyle?: string;
}
export interface Footers{
  links: LinkItem[];
  year: string;
}