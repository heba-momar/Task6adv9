import { Link } from "react-router-dom";
import type { LinkItem } from "../../type/Link";

interface Footers{
  links: LinkItem[];
  year: string;
}
const Footer = ({year,links}:Footers) => {
  return (
   <div className=" flex flex-col-reverse sm:flex-row gap-[30px] sm:gap-[14px] items-center 
    py-[30px] mt-[42px] text-left sm:text-center">
      <span className="text-[20px] leading-6 transition-colors duration-200 hover:text-purple-600">
        © {year}
      </span>
      <ul className="flex flex-col sm:flex-row items-center gap-3.5">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="text-[20px] leading-6 transition-colors duration-200 hover:text-purple-600 dark:hover:text-white"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
