import React from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";

const DashboardBanner = () => {
  return (
    <>
    <div className="py-0 px-3 max-w-[80rem] md:max-w-[90rem] md:px-6 md:py-0 p-6 mx-auto relative">
        <div className="flex justify-between items-center bg-primary">
          <div className="flex gap-2 items-center py-1">
            <FaAngleDoubleUp className="text-accent size-4 lg:size-5 lg:ml-0" />
            <h1 className="text-[clamp(20px,4vw,29px)] font-[comfortaa-semiBold] ">Pedal</h1>
          </div>
          <nav>
            <ul className="nav">
              <li className="hover:text-accent cursor-pointer">Home</li>
              <li className="hover:text-accent cursor-pointer">Products</li>
              <li className="hover:text-accent cursor-pointer">Community</li>
              <li className="hover:text-accent cursor-pointer">Support</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="banner md:bg-[url('/img/Rectangle.webp')]">
      <div className="container flex h-full ">
        <div className="banner_wrapper flex flex-col items-center md:items-start md:justify-center h-full md:gap-7 md:h-[815px] ">
          <h1 className="text-center md:text-left md:max-w-[calc(50% + 90px)] w-[50%] md:w-[50%] text-[clamp(1rem,5vw,3.5rem)] py-6 font-[montserrat-extralight]">
            The largest community of Bike enthusiasts
          </h1>
          <button className="btn-primary">Talk to Us</button>
        </div>
      </div>

      <div className="md:hidden relative ">
        <div className="bg-gradient-to-b from-white to-transparent absolute h-[2rem] w-full"></div>
        <img
          src="/img/Rectangle.webp"
          alt=""
          className="w-full object-cover h-[25rem] "
        />
      </div>
    </div>
    
    
    </>
  )
}

export default DashboardBanner
