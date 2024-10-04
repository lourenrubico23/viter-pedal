import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import Navigation from "./Navigation";
import { StoreContext } from "../../store/StoreContext";
import { setIsShow } from "../../store/StoreAction";
import { devBaseImgUrl } from "../helpers/functions-general";
import useQueryData from "../custom-hooks/useQueryData";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
    document.body.classList.toggle("overflow-hidden");
  };

  const [activeSection, setActiveSection] = React.useState("#header");

  // const sections = useRef([]);

  React.useEffect(() => {
    // Define the section IDs to track
    const sectionIds = [
      "header",
      "services",
      "about",
      "contact-banner",
      "testimonials",
      "footer",
    ];

    // Create an IntersectionObserver to track the active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold as needed (50% of the section is in view)
    );

    // Observe each section on the page
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      document.body.classList.remove("overflow-hidden");
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => {
        dispatch(setIsShow(false));
      }, 100);
    }
  };

  const {
    isLoading,
    error,
    data: headerData,
  } = useQueryData(
    "/v1/header", // endpoint
    "get", // method
    "header" // key
  );

  return (
    <header className={store.isShow ? "bg-primary" : "overflow-hidden bg-primary"} id="header">
      <div className="container relative">
        <div className="flex justify-between items-center">
          <div className="py-1 w-[90px] md:w-[115px] md:h-[37px] relative">
            <img
              src={`${devBaseImgUrl}/${headerData?.data[0].header_logo_img}`}
              alt=""
              className="object-cover"
            />
          </div>
          <nav>
            <div className="toggle lg:hidden" onClick={handleShow}>
              <span></span>
              <span className="my-1"></span>
              <span></span>
            </div>
            <ul className={store.isShow ? "show nav" : "nav"}>
              <li
                className="hover:text-accent cursor-pointer"
                onClick={() => scrollToSection("header")}
              >
                {headerData?.data[0].header_nav_a}
              </li>
              <li
                className="hover:text-accent cursor-pointer"
                onClick={() => scrollToSection("services")}
              >
                {headerData?.data[0].header_nav_b}
              </li>
              <li
                className="hover:text-accent cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                {headerData?.data[0].header_nav_c}
              </li>
              <li
                className="hover:text-accent cursor-pointer"
                onClick={() => scrollToSection("testimonials")}
              >
                {headerData?.data[0].header_nav_d}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
