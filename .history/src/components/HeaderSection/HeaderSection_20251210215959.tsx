import type { HeaderSection } from "../../Interface/Interface"


const HeaderSection = ({blog}:HeaderSection) => {
  return (
        <>
 <span className="text-sm font-semibold leading-5 text-purple01">{blog.date}</span>
<h2 className="font-bold text-4xl leading-8">{blog.title}</h2>
   <img src={blog.image} alt="blog image" className="h-[426px] object-cover" />
        </>
  )
}

export default HeaderSection
