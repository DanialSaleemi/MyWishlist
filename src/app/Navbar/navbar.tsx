import React from "react";
import { logosvg, searchicon, carticon } from "./svgsource";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {

  return (
    <nav className="hidden sm:flex py-4 justify-between items-center h-100px w-1440px">
      <div className="flex items-center space-x-[32px] text-rgba(27, 35, 54, 1) text-[17px] text-center font-medium leading-6 tracking-[0.01em] bg-rgba(27, 35, 54, 0.02) ">
        <div>{logosvg}</div>
        <a href="#">Home</a>
        <div className="group relative">
          <a className="flex items-center" href="#">Pages
          <FaAngleDown/>
            </a>
          <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            {/* Add more pages as needed */}
          </ul>
        </div>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
      </div>
      <div className="flex items-center gap-[30px]">
        <div
          className="flex items-center space-x-[20px]">
<form action="" className="relative w-max">
        <input type="search" 
              className="peer cursor-pointer border-hidden relative z-10 h-12 w-12 rounded-lg bg-transparent outline-none focus:w-full focus:cursor-text focus:border focus:bg-[#080E1E0D] focus:z-auto focus:pl-16 focus:pr-2" />
{searchicon}
      </form>
          <i className="shopping-cart"></i> {carticon}
        </div>
        <button className="bg-green-400 text-white p-[10px] w-[106px] h-[50px] rounded-[16px]">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
