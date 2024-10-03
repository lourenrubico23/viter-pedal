import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";

const MobileViewFooter = () => {
  const {
    isFetchingFooter,
    errorFooter,
    data: footerData,
  } = useQueryData(
    "/v1/footer", // endpoint
    "get", // method
    "footer" // key
  );

  const {
    isFetching,
    error,
    data: headerData,
  } = useQueryData(
    "/v1/header", // endpoint
    "get", // method
    "header" // key
  );

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
      { threshold: 0.1 } // Adjust this threshold as needed (50% of the section is in view)
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
    }
  };

  return (
    <>
      <div className="footer_wrapper bg-secondary py-12" id="footer">
        <div className="container">
          <div className="">
            <div className="footer-nav text-center">
              <ul className="text-[1rem] font-[montserrat-extrabold] flex flex-col gap-2">
                <li
                  className="hover:text-accent transition-all cursor-pointer"
                  onClick={() => scrollToSection("header")}
                >
                  {headerData?.data[0].header_nav_a
                    ? headerData?.data[0].header_nav_a
                    : "navigation1"}
                </li>
                <li
                  className="hover:text-accent transition-all cursor-pointer"
                  onClick={() => scrollToSection("services")}
                >
                  {headerData?.data[0].header_nav_b
                    ? headerData?.data[0].header_nav_b
                    : "navigation2"}
                </li>
                <li
                  className="hover:text-accent transition-all cursor-pointer"
                  onClick={() => scrollToSection("about")}
                >
                  {headerData?.data[0].header_nav_c
                    ? headerData?.data[0].header_nav_c
                    : "navigation3"}
                </li>
                <li
                  className="hover:text-accent transition-all cursor-pointer"
                  onClick={() => scrollToSection("testimonials")}
                >
                  {headerData?.data[0].header_nav_d
                    ? headerData?.data[0].header_nav_d
                    : "navigation4"}
                </li>
              </ul>
            </div>
            <div className="logo flex items-center gap-2 justify-center py-10">
              <div className="py-1 w-[115px] h-[37px]">
                <img
                  src={`${devBaseImgUrl}/${headerData?.data[0].header_logo_img}`}
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-center text-[1rem] text-gray-700">
              &copy;{" "}
              {footerData?.data[0].footer_copyright
                ? footerData?.data[0].footer_copyright
                : "copyright"}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileViewFooter;
