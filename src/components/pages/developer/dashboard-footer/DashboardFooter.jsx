import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { HiPencil } from "react-icons/hi2";
import React from "react";

const DashboardFooter = ({ setItemEdit, setIsAdd, footerData }) => {
  const [activeSection, setActiveSection] = React.useState("#header");

  // console.log(activeSection);
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
      section.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const {
    isFetching,
    error,
    data: headerData,
  } = useQueryData(
    "/v1/header", // endpoint
    "get", // method
    "header" // key
  );

  const handleAddCopyright = () => {
    setIsAdd(true);
    setItemEdit("footerUpdate");
  };

  return (
    <>
      {/* footer */}
      <section id="footer">
        <div className="bg-secondary py-12 md:py-16">
          <div className="container_dashboard">
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="footer-nav text-center">
                <ul className="text-[clamp(.6rem,4vw,15px)] font-[montserrat-extrabold] flex flex-col gap-2 lg:flex lg:flex-row lg:gap-24">
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
              <div className="logo flex items-center gap-2 justify-center py-10 lg:order-first">
                <div className="py-1 w-[115px] h-[37px]">
                  <img
                    src={`${devBaseImgUrl}/${headerData?.data[0].header_logo_img}`}
                    alt=""
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-center text-[clamp(.5rem,4vw,15px)] text-gray-700 relative">
                <a
                  className="absolute z-30 m-10 -right-10 -top-12 cursor-pointer tooltip-header"
                  data-tooltip="Edit Content"
                  onClick={handleAddCopyright}
                >
                  <HiPencil className=" bg-accent text-black rounded-full w-[25px] h-[25px] p-[5px] border-[1px]" />
                </a>
                &copy;{" "}
                {footerData?.data[0].footer_copyright
                  ? footerData?.data[0].footer_copyright
                  : "copyright"}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardFooter;
