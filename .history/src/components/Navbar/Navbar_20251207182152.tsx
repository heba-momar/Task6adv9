import { NavLink } from "react-router-dom"
import { NavData } from "../../data/NavbarData"

const Navbar = () => {
  return (
    <nav className="px-[8.20512821%] md:px-[3.83693046%] lg:px-[7.777777777777778%] bg-white pt-5 pb-5 fixed left-1/2 ">
      <div className="">
      <p className="font-semibold text-lg leading-6 lg:text-[20px] text-black01">Your Name</p>
      {NavData.map((item,index)=>{
        return(
        <NavLink to={item.path} className={({ isActive }) => isActive ? "border-b-2 pb-1" : " "}>{item.name}</NavLink>    
        )
      })}
      </div>
    </nav>
  )
}

export default Navbar
