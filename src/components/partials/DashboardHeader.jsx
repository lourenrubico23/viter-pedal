import React from "react";
import Banner from "../pages/website/home-page/Banner";
import Header from "./Header";
import Services from "../pages/website/home-page/Services";
import About from "../pages/website/home-page/About";
import Testimonial from "../pages/website/home-page/Testimonial";
import Footer from "../pages/website/home-page/Footer";
import { FaDesktop } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { LuPaintbrush2 } from "react-icons/lu";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <>
      <div className="container_dashboard shadow_wrapper fixed lg:min-w-[88rem] 3xl:max-w-[100rem] bg-dashSecondary z-50 py-3 rounded-t-md">
        <div className=" flex items-center justify-between">
          <h1 className="font-[inter24-regular]">Single Page Website</h1>
          <div className="flex items-center gap-4">
            <Link>
              <FaDesktop className="size-4 " />
            </Link>
            <Link>
              <FiSmartphone className="size-4 text-dashAccent" />
            </Link>
            <Link>
              <LuPaintbrush2 className="size-4 text-dashAccent" />
            </Link>
            <Link>
              <BsBoxArrowUpRight className="size-4 text-dashAccent" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
