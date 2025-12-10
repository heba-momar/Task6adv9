import { useDispatch, useSelector } from "react-redux";
import type { RecentPostsProps } from "../../Interface/Interface"
import BlogCard from "../BlogCard/BlogCard"
import type { RootState } from "../../redux/store";
import { fetchRecentBlogs } from "../../redux/slice";
import { useEffect } from "react";


const RecentBlogPosts = ({ postsCount}:RecentPostsProps) => {
  const dispatch = useDispatch();

  const recentPosts = useSelector(
    (state: RootState) => state.blogs.recentPosts
  );

  useEffect(() => {
    dispatch(fetchRecentBlogs({ len: postsCount }));
  }, [dispatch, postsCount]);

  if (!recentPosts || recentPosts.length === 0) return null;

  const isBlogDetails = postsCount === 4;  
  return (
    <div className={`${isBlogDetails ? "" : "w-full md:w-[27%]"} flex flex-col gap-8`}>
      <h2 className="text-2xl font-semibold leading-6 mt-[30px] md:leading-8">
        Recent Posts
      </h2>

      {isBlogDetails ? (
        <>
          <div className="md:block lg:flex w-full gap-8">
            <div className="md:w-full lg:w-1/2">
              <BlogCard
                blog={recentPosts[0]}
                cardContainerClass="flex flex-col gap-8 py-[30px] md:py-0"
                imgClass="max-h-[228px] object-cover"
                titleClass="text-2xl leading-8"
              />
            </div>

            <div className="flex flex-col gap-8 w-full lg:w-1/2 mt-5 lg:mt-0">
              {recentPosts.slice(1, 3).map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  cardContainerClass="flex gap-6 flex-col md:flex-row"
                  imgClass="max-h-[200px] object-cover w-full md:w-1/2"
                  titleClass="text-sm leading-7"
                />
              ))}
            </div>
          </div>

          {recentPosts.length > 3 && (
            <BlogCard
              blog={recentPosts[3]}
              cardContainerClass="flex gap-6 flex-col lg:flex-row mt-[30px]"
              imgClass="max-h-[246px] lg:w-1/2 w-full"
              titleClass="text-2xl leading-8"
              pargClass="lg:w-1/2 w-full"
              lineClamp="line-clamp-3 lg:line-clamp-5"
            />
          )}
        </>
      ) : (
        recentPosts.map((item) => (
          <BlogCard
            key={item.id}
            blog={item}
            cardContainerClass="flex flex-col gap-6 py-[30px] md:py-0"
            imgClass="w-full object-cover"
            titleClass="text-lg leading-7"
            lineClamp="line-clamp-2"
          />
        ))
      )}
    </div>
  )
}

export default RecentBlogPosts




