import useQueryData from "@/components/custom-hooks/useQueryData";
import { hexToRgb } from "@/components/helpers/functions-general";
import Header from "../../../partials/Header";
import About from "./About";
import Banner from "./Banner";
import ContactBanner from "./ContactBanner";
import Footer from "./Footer";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  const {
    isFetching,
    error,
    data: colorsData,
  } = useQueryData(
    "/v1/colors", // endpoint
    "get", // method
    "colors" // key
  );

  // to change the color when submitted
  document
    .querySelector(":root")
    .style.setProperty(
      "--primary-color",
      hexToRgb(colorsData?.data[0].colors_primary)
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--secondary-color",
      hexToRgb(colorsData?.data[0].colors_secondary)
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--accent-color",
      hexToRgb(colorsData?.data[0].colors_accent)
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--dark-color",
      hexToRgb(colorsData?.data[0].colors_text)
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--buttonHover-color",
      hexToRgb(colorsData?.data[0].colors_hover)
    );

  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <ContactBanner />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
