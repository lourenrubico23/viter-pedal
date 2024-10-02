import DashboardHeader from "@/components/partials/spinner/dashboard-header/DashboardHeader";
import Navigation from "../../partials/Navigation";
import About from "./dashboard-about/About";
import ContactBanner from "./dashboard-contact-banner/ContactBanner";
import Footer from "./dashboard-footer/Footer";
import Header from "./dashboard-header/Header";
import Services from "./dashboard-services/Services";
import Testimonials from "./dashboard-testimonial/Testimonials";
import { StoreContext } from "@/store/StoreContext";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";
import React from "react";

const Dashboard = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  return (
    <>
      <Navigation />
      <div className="main-wrapper">
        <div className="fixed bg-dashPrimary py-3 w-[100%] h-[27px] z-50 "></div>
        <div className="wrapper w-[calc(100%_-_40px)] shadow_wrapper">
          <DashboardHeader menu="dashboard" />
          <div className="md:pt-[2.5rem]">
            <Header />
            <Services />
            <About />
            <ContactBanner />
            <Testimonials />
            <Footer />
          </div>
        </div>
      </div>
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Dashboard;
