
import Image from "next/image";
import React from "react";
import { data, ordersicon, products, usericon } from "./contentsource";
import Productcard from "./productcard";

export default function Profilecard() {  
  return (
    <div className="flex flex-wrap justify-center sm:justify-normal">
      <div className="hidden sm:block grid-flow-row w-1/4">
        <div className="flex items-center">
          <div
            className="flex rounded-full py-5 pl-5 pr-4 cursor-pointer"
          >
            <Image src="/pp.png" alt="profile image" height={51} width={51} />
          </div>
          <span className="text-left">
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

        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="px-4 py-[18px] cursor-pointer hover:bg-green-600"
            >
              <div className="flex gap-x-4 items-center ">
                {item.image}
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-x-6 w-3/4">
        {products.map((item) => (
          <div key={item.id}>
            
          <Productcard
            id={item.id}
            imageurl={item.imageurl}
            name={item.name}
            price={item.price}
            icon={item.icon}
            reviews={item.reviews}
          />
          </div>
        ))}
      </div>
    </div>
  );
}
