import { useDispatch, useSelector } from "react-redux";
import type { AllBlogPosts } from "../../Interface/Interface"
import BlogCard from "../BlogCard/BlogCard"
import type { RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchAllBlogs } from "../../redux/slice";
import Pagination from "../Pagination/Pagination";

const AllBlogPosts = ({ postsToShow, showPagination, customCardProps }:AllBlogPosts) => {
   const dispatch = useDispatch();
  const allBlogPosts = useSelector((state:RootState) => state.blogs.currentPosts);

  useEffect(() => {
    dispatch(fetchAllBlogs({ page: 1, itemsPerPage: postsToShow }));
  }, [postsToShow]);   
  return (
 <div className="mt-[30px]">
<h2 className="text-2xl font-semibold leading-6 mb-6 md:leading-8">All blog posts</h2>
<div className={customCardProps ? "flex flex-wrap justify-between gap-y-8 w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8"}>
{allBlogPosts.map((item, index) => (
   <BlogCard key={item.id} blog={item} cardContainerClass={
    customCardProps? `w-full ${index === 0 || index === 1 ? "md:w-[48%]" : "md:w-full"} lg:w-[32%] flex flex-col gap-8 py-[30px] md:py-0`
      : "flex flex-col gap-8 py-[30px] md:py-0"
            }
            imgClass="w-full h-[240px] object-cover"
            titleClass="text-2xl leading-8"
            lineClamp="line-clamp-2"/>
        ))}
      </div>

      {showPagination && <Pagination />}
    </div>
  )
}

export default AllBlogPosts
