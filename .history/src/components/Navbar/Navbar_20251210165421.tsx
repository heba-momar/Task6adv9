import { NavLink } from "react-router-dom"
import { NavData } from "../../data/NavbarData"
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import clsx from "clsx";

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
<nav className={clsx(
  "px-[8.20512821%] md:px-[3.83693046%] lg:px-[7.777777777777778%]",
  "fixed left-1/2 -translate-x-1/2 pt-5 pb-5 z-50 border border-transparent",
  "bg-white dark:bg-darkNavy",
  "transition-all duration-200 ease-in-out",
  "w-full"
)}>

      <div className="flex justify-between items-center w-full">
        <p className="font-semibold text-lg  leading-6 lg:text-[20px]">Your Name</p> {/* main website name */}

        {/* Mobile menu with animation */}
  
          {menuOpen && (
            <ul  className="flex flex-col gap-5 justify-center items-center z-51 md:hidden
                text-lg leading-6
                fixed inset-0  h-screen w-screen bg-white dark:bg-darkNavy " >

              {/* Logo/Title*/}
              <li  className="font-semibold text-lg  leading-6 md:hidden">
                Your Name
              </li>

              {/* Navigation links */}
              {NavData.map((item, index) => (
                <li key={index}  className="p-2">
                  <NavLink to={item.path} end={item.path === "/theblog"}
                    className={({ isActive }) => isActive ? "border-b-2 pb-1" : " "}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              {/* Dark mode toggle inside mobile menu */}
              <li>  <DarkModeToggle /></li>

              {/* Close button at the bottom */}
              <li className="absolute bottom-1 mb-5">
                <button onClick={() => setMenuOpen(false)} aria-label="close menu">
                  <img src="/theblog/images/navbar/close.svg" alt="Close"
                    className="dark:filter dark:invert"
                  />
                </button>
              </li>

            </ul>
          )}

        {/* Hamburger menu button for mobile */}
        <button className="md:hidden z-50" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <img src="/theblog/images/navbar/bars.svg"
            alt="Menu"
            className="dark:filter dark:invert"
          />
        </button>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex md:flex-row md:gap-3.5 font-normal text-lg lg:text-[20px] leading-6">
          {NavData.map((item, index) => (
            <li key={index} className="p-2">
              <NavLink to={item.path} end={item.path === "/theblog"}
                className={({ isActive }) => isActive ? "border-b-2 pb-1" : " "}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Dark mode toggle in desktop */}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
