"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { data} from "./contentsource";

export default function MobileProfile() {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid-flow-row w-full  sm:hidden">
      <div className="flex items-center  ">
        <div
          className="flex rounded-full py-5 pl-5 pr-4 cursor-pointer "
          onClick={() => setOpen(!open)}
        >
          <Image src="/pp.png" alt="profile image" height={51} width={51} />
        </div>
        <span className="text-left ">
          <p className="text-[15px] font-medium leading-5 tracking-[0.01em]">
            Hello 👋
          </p>
          <p
            className="text-[rgba(27, 35, 54, 1)] text-xl font-bold leading-6 tracking-[0.005rem]"
          >
            Kristin Watson
          </p>
        </span>
      </div>

      <div
        className={`${
          open ? "block w-max " : "hidden "
        }`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="px-6 py-[18px] cursor-pointer hover:bg-green-600 "
          >
            <div className="flex gap-x-4 items-center ">
              {item.image}
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
