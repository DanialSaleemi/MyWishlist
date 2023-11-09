import React from "react";
import { logosvg } from "../Navbar/svgsource";
import {
  amex,
  contactinfo,
  fb,
  fwdarrow,
  gpay,
  insta,
  mailfill,
  master,
  paypal,
  twitter,
  visa,
} from "../Components/contentsource";

export default function Footer() {
  return (
    <div className="grid-flow-row mt-28 mx-2">
      <div className="flex flex-col space-y-6 md:flex-row pt-20 border-y-2 ">
        <div className="grid grid-flow-row auto-rows-max basis-2/6">
          {logosvg}
          <div className="grid-flow-row py-8">
            {contactinfo.map((item) => (
              <div key={item.id} className="flex gap-4 py-2">
                {item.image}
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="text-[rgba(8, 14, 30, 1)] text-xl font-bold text-left tracking-tighter leading-6 basis-auto md:basis-1/6">
          <p>Information</p>
          <div className="grid grid-flow-row space-y-2 mt-4 text-[rgba(8, 14, 30, 0.6)] text-xs leading-5 text-left font-normal tracking-wider opacity-60">
            <p>My Account</p>
            <p>Login</p>
            <p>My Cart</p>
            <p>My Wishlist</p>
            <p>Checkout</p>
          </div>
        </div>
        <div className="text-[rgba(8, 14, 30, 1)] text-xl font-bold text-left tracking-tighter leading-6 basis-auto md:basis-1/6">
          <p>Service</p>
          <div className="grid grid-flow-row space-y-2 mt-4 text-[rgba(8, 14, 30, 0.6)] text-xs leading-5 text-left font-normal tracking-wider opacity-60">
            <p>About Us</p>
            <p>Careers</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="text-[rgba(8, 14, 30, 1)] text-xl font-bold text-left tracking-tighter leading-6 md:basis-2/6">
          <p>Subscribe</p>
          <div className="grid grid-flow-row space-y-2 mt-4">
            <p className="text-[rgba(8, 14, 30, 0.6)] text-xs leading-5 text-left font-normal tracking-wider opacity-60">
              Enter your email below to be the first to know about new
              collections
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Your Email"
                className="text-slate-800 bg-[#080E1E0D] text-sm text-left font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md pl-8 w-full py-2"
              ></input>
              <div className="absolute inset-y-0 left-1 flex items-center pointer-events-none">
                {mailfill}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                {fwdarrow}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex md:px-auto">
          {visa}
          {master}
          {gpay}
          {amex}
          {paypal}
        </div>
        <p className="hidden sm:flex text-center text-sm font-medium leading-5 tracking-[0.01em] opacity-60">
          &copy; 2023 tooin All Rights are reserved
        </p>
        <div className="flex md:space-x-2">
          {fb}
          {insta}
          {twitter}
        </div>
      </div>
      <p className="flex justify-center items-center text-center w-max text-sm font-medium leading-5 tracking-[0.01em] opacity-60 sm:hidden">
          &copy; 2023 tooin All Rights are reserved
        </p>
    </div>
  );
}
