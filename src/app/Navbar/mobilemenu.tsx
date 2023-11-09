"use client";

import React, { useState } from "react";
import { logosvg, searchicon, carticon } from "./svgsource";
import { FaAngleRight, FaOutdent } from "react-icons/fa";

const MobileMenu = () => {
  const [expand, isExpanded] = useState(false);
  return (
    <nav className="flex-col py-4 justify-between items-center sm:hidden">
      <div className="flex flex-row justify-between items-center p-1">
        <a>{logosvg}</a>          
          <button className="bg-green-400 text-white p-[10px] w-[106px] h-[50px] rounded-[16px]">
            Login
          </button>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="">
        
        <div className="px-1 py-2">
          <span>

            <FaOutdent size={30} onClick={() => isExpanded(!expand)} />
          </span>
        </div>

        <div
          className={` ${
            !expand
              ? "hidden"
              : "flex flex-col relative px-4 py-4 space-y-4 text-[rgba(27, 35, 54, 1)] text-[17px] text-left font-medium leading-6 tracking-[0.01em]]"
          }`}
        >
          <div className="flex items-center space-x-[20px]">
            <form action="" className="relative w-max">
              <input
                type="search"
                placeholder="Search ..."
                className="peer cursor-pointer border-hidden relative z-10 h-12 w-12 rounded-lg bg-transparent outline-none focus:w-full focus:cursor-text focus:border focus:bg-[#080E1E0D] focus:z-auto focus:pl-16 focus:pr-2"
              />
              {searchicon}
            </form>
          </div>

          <a href="#">Home</a>
          <div className="group relative">
          <a className="flex items-center relative" href="#">Pages
          <FaAngleRight/>
            </a>
            <ul className="hidden absolute w-max left-20 top-0 px-8 mx-1 space-y-2 bg-green-400 text-white font-normal group-hover:block">
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
        </div>
      <div className={`px-10 ${
            !expand
              ? "block" : "hidden"} `}><i className="shopping-cart"></i> {carticon}</div>
      </div>
    </nav>
  );
};

export default MobileMenu;
