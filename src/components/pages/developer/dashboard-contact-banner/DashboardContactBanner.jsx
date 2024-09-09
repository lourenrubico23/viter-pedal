import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";

const DashboardContactBanner = () => {
  return (
    <>
      {/* unleash */}
      <div className="bg-secondary py-16 md:py-[100px]">
        <div className="container_dashboard relative">
          <div className="md:flex md:items-center lg:gap-[5rem]">
            <a
              className="absolute z-30 m-10 -left-20 -top-32 cursor-pointer tooltip-action-table"
              data-tooltip="Upload"
            >
              <MdFileUpload className=" bg-accent rounded-full w-[25px] h-[25px] p-1 " />
            </a>
            <h2 className="text-[clamp(1.2rem,4vw,33px)] leading-7 text-center justify-center mx-auto lg:mx-0 lg:text-left w-[15rem] md:w-[70rem] font-[montserrat-medium] pb-6 text-gray-800 md:leading-[50px]">
              Unleash Your Adventurous Spirit: Ride a Bike and Explore the World
            </h2>
            <button className="btn-primary flex items-center gap-2 mx-auto">
              Join Our Community <FaFacebookSquare className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContactBanner;
