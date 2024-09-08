import React from "react";
import Navigation from "../../partials/Navigation";
import DashboardHeader from "../../partials/DashboardHeader";
import DashboardBanner from "./DashboardBanner/DashboardBanner";
import Header from "../../partials/Header";
import Banner from "../website/home-page/Banner";

const Dashboard = () => {
  return (
    <>
      <Navigation />
      
      <div className="main-wrapper">
      <div className="fixed bg-dashPrimary py-3 w-[100%] z-50 "></div>
        <div className="wrapper shadow_wrapper">
      <DashboardHeader />
      <div className="pt-12">
        <DashboardBanner/>
      </div>
      
        </div>
      </div>
    </>
  );
};

export default Dashboard;
