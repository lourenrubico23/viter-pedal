
import React from "react";
import Banner from "../website/home-page/Banner";
import Services from "../website/home-page/Services";
import About from "../website/home-page/About";
import ContactBanner from "../website/home-page/ContactBanner";
import Testimonial from "../website/home-page/Testimonial";
import Footer from "../website/home-page/Footer";
import Navigation from "@/components/partials/Navigation";
import Header from "@/components/partials/Header";
import MobileViewHeader from "./mobile-view/mobile-view-header/MobileViewHeader";
import MobileViewServices from "./mobile-view/mobile-view-services/MobileViewServices";
import MobileViewAbout from "./mobile-view/mobile-view-about/MobileViewAbout";
import MobileViewContactBanner from "./mobile-view/mobile-view-contact-banner/MobileViewContactBanner";
import MobileViewTestimonials from "./mobile-view/mobile-view-testimonial/MobileViewTestimonials";
import MobileViewFooter from "./mobile-view/mobile-view-footer/MobileViewFooter";
import DashboardHeader from "@/components/partials/spinner/dashboard-header/DashboardHeader";


const MobileView = () => {
  return (
    <>

<div className="relative transition-all duration-150 ease-linear bg-dashPrimary">
        <Navigation />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardHeader menu="mobile-view" />
          <div className=" w-[calc(100%_-_10px)] pt-[50px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="shadow_wrapper max-w-[375px] mx-auto pt-3">
            <MobileViewHeader/>
            <MobileViewServices/>
            <MobileViewAbout/>
            <MobileViewContactBanner/>
            <MobileViewTestimonials/>
            <MobileViewFooter/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileView;
