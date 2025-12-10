import AllBlogPosts from "../components/AllBlogPosts/AllBlogPosts"
import StoriesAndInterviews from "../components/StoriesAndInterviews/StoriesAndInterviews"


const Newsletter = () => {
  return (
    <div className="container mx-auto">
      <StoriesAndInterviews pargraphSize={`lg:w-[59%]`} />
      <AllBlogPosts postsToShow={3} showPagination={false} customCardProps={true} />
    </div>
  )
}

export default Newsletter
