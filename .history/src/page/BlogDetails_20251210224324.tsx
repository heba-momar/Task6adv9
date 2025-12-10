import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../redux/store';
import { fetchBlogDetails, fetchRecentBlogs } from '../redux/slice';
import SpeechReader from '../utlis/SpeechReader';
import RecentBlogPosts from '../components/RecentBlogPosts/RecentBlogPosts';
import StoriesAndInterviews from '../components/StoriesAndInterviews/StoriesAndInterviews';
import ReadingTime from '../components/ReadingTime/ReadingTime';
import TagsSection from '../components/TagsSection/TagsSection';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import DescriptionSection from '../components/DescriptionSection/DescriptionSection';
import DetailsSection from '../components/DetailsSection/DetailsSection';

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const post = useSelector((state:RootState) => state.blogs.selectedPost);

  useEffect(() => {
    if (id) {
      dispatch(fetchBlogDetails({ id: parseInt(id) }));
    }
    dispatch(fetchRecentBlogs({ len: 9, id: id }));
  }, [id, dispatch]);

  if (!post) {
    return <div>Post Not Found</div>;
  }    
  return (
    <>
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-8 mt-8">
        <RecentBlogPosts postsCount={9} isBlogDetails={false} />
        <div className="w-full md:w-[67.5%] flex flex-col gap-8 ">
          <SpeechReader post={post} />

          <ReadingTime details={post.details} />
          <HeaderSection blog={post} />
          <DescriptionSection description={post.description} />
          <DetailsSection details={post.details} />
          <TagsSection labels={post.label} />
          <div className="hidden lg:block">
            <StoriesAndInterviews pargraphSize={`lg:w-[100%]`} />
          </div>
        </div>
      </div>
      <div className=" md:block lg:hidden mt-5">
        <StoriesAndInterviews pargraphSize={`lg:w-[59%]`} />
      </div>      
    </>
  )
}

export default BlogDetails
