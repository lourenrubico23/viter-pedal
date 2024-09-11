
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
      <Navigation />
      <div className="main-wrapper">
        <div className="fixed bg-dashPrimary py-3 w-[100%] z-50 "></div>
        <div className="wrapper shadow_wrapper">
          <DashboardHeader menu="mobile-view"/>
          <div className="max-w-[375px] mx-auto md:pt-12 3xl:pt-12 border-[2px]">
            <MobileViewHeader/>
            <MobileViewServices/>
            <MobileViewAbout/>
            <MobileViewContactBanner/>
            <MobileViewTestimonials/>
            <MobileViewFooter/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileView;
