import React from "react";
import Navigation from "../../partials/Navigation";
import DashboardHeader from "../../partials/DashboardHeader";
import DashboardBanner from "./dashboard-header/DashboardBanner";
import Header from "../../partials/Header";
import Banner from "../website/home-page/Banner";
import DashboardServices from "./dashboard-services/DashboardServices";
import DashboardAbout from "./dashboard-about/DashboardAbout";
import DashboardContactBanner from "./dashboard-contact-banner/DashboardContactBanner";
import DashboardTestimonial from "./dashboard-testimonial/DashboardTestimonial";
import DashboardFooter from "./dashboard-footer/DashboardFooter";

const Dashboard = () => {
  return (
    <>
      <Navigation />
      <div className="main-wrapper">
        <div className="fixed bg-dashPrimary py-3 w-[100%] z-50 "></div>
        <div className="wrapper shadow_wrapper">
          <DashboardHeader />
          <div className="md:pt-12 3xl:pt-12">
            <DashboardBanner />
            <DashboardServices />
            <DashboardAbout />
            <DashboardContactBanner />
            <DashboardTestimonial />
            <DashboardFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
