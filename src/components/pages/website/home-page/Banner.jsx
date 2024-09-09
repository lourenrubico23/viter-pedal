import React from "react";

const Banner = () => {
  return (
    <div className="banner md:bg-[url('/img/Rectangle.webp')]">
      <div className="container flex h-full ">
        <div className="banner_wrapper flex flex-col items-center md:items-start md:justify-center h-full md:gap-7 md:h-[815px] ">
          <h1 className="text-center md:text-left md:max-w-[calc(50% + 90px)] md:w-[600px] text-[clamp(1rem,5vw,3.5rem)] py-6 font-[montserrat-extralight] md:text-[3.5rem]">
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
  );
};

export default Banner;
