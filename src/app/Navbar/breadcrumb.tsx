import React from "react";
import { backarrowicon, forwardarrowicon } from "./svgsource";

const Breadcrumb = () => {
  return (
    <>
      <div className="flex justify-between items-center py-6 sm:py-4 px-1 sm:px-0">
        <div className="hidden sm:flex items-center space-x-0 sm:space-x-2 text-[rgba(54, 59, 68, 1)] text-center font-semibold leading-5 text-xs sm:text-[15px] tracking-[0.01em]">
          <button className="rounded-full border-2 px-4 py-3 bg-rgba(8, 14, 30, 0.05) flex items-center">
            <span>{backarrowicon}</span> Go Home
          </button>
        </div>
        <div className="flex space-x-1 sm:space-x-[12px] items-center text-[15px] text-center font-semibold leading-5 tracking-[0.01em]">          
          <a href="/">Home</a>
          <span>{forwardarrowicon}</span>
          <a href="/">Profile</a>
          <span>{forwardarrowicon}</span>
          <div className="text-black opacity-40">
            Wishlist
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
