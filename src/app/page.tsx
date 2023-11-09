import Profilecard from "./Components/profilecard";
import Footer from "./Footer/footer";
import MobileProfile from "./Components/mobileprofile";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex text-4xl text-left font-bold leading-10 tracking-wider text-rgba(27, 35, 54, 1) py-12">
        My Wishlist
      </div>
      <div className="flex items-center justify-center">
        <MobileProfile/>
      </div>
      <Profilecard />
      <Footer />
    </>
  );
}
