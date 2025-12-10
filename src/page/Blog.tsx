import Hero from "../components/Hero/Hero"
import RecentBlogPosts from "../components/RecentBlogPosts/RecentBlogPosts"
import  AllBlogPosts from "../components/AllBlogPosts/AllBlogPosts"

const Blog = () => {
  return (
    <div className="container mx-auto mt-[130px] md:mt-[250px] lg:mt-0">
     <Hero/> 
     <RecentBlogPosts postsCount={4} isBlogDetails={true}/>
   <AllBlogPosts postsToShow={4} showPagination={true} customCardProps={false}/>
    </div>
  )
}

export default Blog
