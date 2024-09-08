import React from "react";
import Banner from "../pages/website/home-page/Banner";
import Header from "./Header";
import Services from "../pages/website/home-page/Services";
import About from "../pages/website/home-page/About";
import Testimonial from "../pages/website/home-page/Testimonial";
import Footer from "../pages/website/home-page/Footer";

const DashboardHeader = () => {
  return (
    <>
    
        <div className="shadow_wrapper fixed w-[85%] bg-dashSecondary z-50 py-3 rounded-t-md">
          <div className="px-10">
            <h1 className="font-[inter24-regular]">Single Page Website</h1>
          </div>
        </div>
    </>
  );
};

export default DashboardHeader;
