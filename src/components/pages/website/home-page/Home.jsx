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

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
