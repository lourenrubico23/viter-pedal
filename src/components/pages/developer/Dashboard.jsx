import DashboardHeader from "../../partials/DashboardHeader";
import Navigation from "../../partials/Navigation";
import About from "./dashboard-about/About";
import DashboardAbout from "./dashboard-about/DashboardAbout";
import ContactBanner from "./dashboard-contact-banner/ContactBanner";
import DashboardContactBanner from "./dashboard-contact-banner/DashboardContactBanner";
import DashboardFooter from "./dashboard-footer/DashboardFooter";
import Footer from "./dashboard-footer/Footer";
import Header from "./dashboard-header/Header";
import DashboardServices from "./dashboard-services/DashboardServices";
import Services from "./dashboard-services/Services";
import DashboardTestimonial from "./dashboard-testimonial/DashboardTestimonial";
import Testimonials from "./dashboard-testimonial/Testimonials";

const Dashboard = () => {
  return (
    <>
      <Navigation />
      <div className="main-wrapper">
        <div className="fixed bg-dashPrimary py-3 w-[100%] z-50 "></div>
        <div className="wrapper shadow_wrapper">
          <DashboardHeader />
          <div className="md:pt-12 3xl:pt-12">
            <Header />
            <Services/>
            <About />
            <ContactBanner />
            <Testimonials/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
