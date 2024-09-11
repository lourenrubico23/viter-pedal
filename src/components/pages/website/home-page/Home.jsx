import React from "react";
import {
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaFacebookSquare,
} from "react-icons/fa";
import Header from "../../../partials/Header";
import Banner from "./Banner";
import Services from "./Services";
import About from "./About";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <ContactBanner/>
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
