import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative ">
      <img src={assets.main_banner_bg} className="hidden md:block w-full" />
      <img src={assets.main_banner_bg_sm} className="md:hidden w-full"/>
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 md:pl-18 lg:pl-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left max-w-72 md:max-w-80 leading-tight lg:leading-15">
            Freshness You Can Trust, Savings You Will Love!
        </h1>
        <div className="flex items-center mt-6 font-medium gap-6">
            <Link to='/products' className="flex group items-center gap-2 px-7 py-2 rounded text-white bg-primary cursor-pointer">
            Shop Now <img src={assets.white_arrow_icon} className="md:hidden transition group-focus:tranlate-x-1"/>
            </Link>
            <Link to='/products' className="hidden md:flex group items-center gap-2 px-7 py-2 rounded text-white bg-primary cursor-pointer">
            Explore Deals
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
