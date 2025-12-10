import type { Post } from "../../type/post";


const TagsSection:React.FC<{ labels: Post["label"] }> = ({labels}) => {
  return (
  <ul className="flex gap-2 flex-wrap">
    {labels.map((item, index) => (
      <li
        key={index}
        className={`rounded-2xl px-2 py-0.5 text-sm font-medium leading-5 md:px-2.5
    transition duration-200 transform hover:scale-105 cursor-default ${item.bgColor} ${item.color}`}
        >
        {item.tag}
      </li>
    ))}
  </ul>
);
  
}

export default TagsSection
