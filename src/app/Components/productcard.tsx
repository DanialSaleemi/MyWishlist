import React from "react";
import {
  addbutton,
  favouritesicon,
  productlist,
} from "./contentsource";
import Image from "next/image";

export default function Productcard(productdata: productlist) {
  return (
    <div className="grid-flow-row py-6">
      <div key={productdata.id} className="rounded-lg">
        <div className="relative">
          <div >
            <Image
              src={productdata.imageurl}
              alt="product image"
              width={263}
              height={244}
            />

            <div className="absolute right-1 bottom-1 sm:right-3 sm:bottom-3right-3 top-3">
              <button>{favouritesicon}</button>
            </div>
            <div className="absolute right-1 bottom-1 sm:right-3 sm:bottom-3">{addbutton}</div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-[#080E1E] font-semibold text-sm sm:text-base leading-6 space-y-1 sm:space-y-2">
        <p>{productdata.name}</p>
        <div className="flex items-center justify-between">
          <p>${productdata.price}</p>
          <div className="flex items-center space-x-1">
            {productdata.icon}
            {productdata.reviews}
          </div>
        </div>
      </div>
    </div>
  );
}
