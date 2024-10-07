import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { FaRegImages } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { IoImageOutline } from "react-icons/io5";
import React from "react";
import HeaderLoader from "./HeaderLoader";

const DashboardBanner = ({
  setIsAdd,
  setItemEdit,
  setIsNav,
  setIsBanner,
  headerData,
  isFetching,
}) => {
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
      { threshold: 0.3 } // Adjust this threshold as needed (50% of the section is in view)
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

  const handleAddLogo = () => {
    setIsAdd(true);
    setItemEdit("logoUpdate");
  };
  const handleAddNav = () => {
    setIsNav(true);
    setItemEdit("navUpdate");
  };
  const handleAddBanner = () => {
    setIsBanner(true);
    setItemEdit("bannerUpdate");
  };

  const bannerImg = `${devBaseImgUrl}/${headerData?.data[0].header_banner_img}`;

  return (
    <>
      <section className="banner bg-primary" id="header">
        {isFetching ? (
          <>
            <HeaderLoader />
          </>
        ) : (
          <div>
            <div className="container_dashboard py-0 px-3 md:max-w-full md:px-6 md:py-0 mx-auto relative bg-primary ">
              <div className="flex justify-between items-center">
                {headerData?.data[0].header_logo_img === "" ? (
                  <div className="py-1 w-[115px] h-[37px] relative bg-gray-300">
                    <IoImageOutline className="text-[30px] mx-auto text-gray-500" />
                    <a
                      className="absolute  m-10 left-20 -top-9 cursor-pointer tooltip-header"
                      data-tooltip="Upload Logo"
                      onClick={handleAddLogo}
                    >
                      <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px] text-black" />
                    </a>
                  </div>
                ) : (
                  <div className="py-1 w-[120px] h-[37px] relative">
                    <img
                      src={`${devBaseImgUrl}/${headerData?.data[0].header_logo_img}`}
                      alt=""
                      className="object-cover w-[120px] h-[37px]"
                    />
                    <a
                      className="absolute m-10 left-20 -top-9 cursor-pointer tooltip-header"
                      data-tooltip="Upload Logo"
                      onClick={handleAddLogo}
                    >
                      <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px] text-black" />
                    </a>
                  </div>
                )}

                <nav className="">
                  <ul className="nav">
                    <a
                      className="cursor-pointer relative tooltip-header-nav"
                      data-tooltip="Edit Text"
                      onClick={handleAddNav}
                    >
                      <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                    </a>
                    <li
                      className="hover:text-accent cursor-pointer"
                      onClick={() => scrollToSection("header")}
                    >
                      {headerData?.data[0].header_nav_a
                        ? headerData?.data[0].header_nav_a
                        : "navigation1"}
                    </li>
                    <li
                      className="hover:text-accent cursor-pointer"
                      onClick={() => scrollToSection("services")}
                    >
                      {headerData?.data[0].header_nav_b
                        ? headerData?.data[0].header_nav_b
                        : "navigation2"}
                    </li>
                    <li
                      className="hover:text-accent cursor-pointer"
                      onClick={() => scrollToSection("about")}
                    >
                      {headerData?.data[0].header_nav_c
                        ? headerData?.data[0].header_nav_c
                        : "navigation3"}
                    </li>
                    <li
                      className="hover:text-accent cursor-pointer"
                      onClick={() => scrollToSection("testimonials")}
                    >
                      {headerData?.data[0].header_nav_d
                        ? headerData?.data[0].header_nav_d
                        : "navigation4"}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div>
              {headerData?.data[0].header_banner_img === "" ? (
                <div className="relative md:bg-no-repeat md:bg-cover">
                  <div className=" container_dashboard flex h-full ">
                    <div className="py-1 grid grid-cols-[_2fr,_1fr] gap-3 w-[100%] h-[100%] relative">
                      <div className="flex flex-col items-start justify-center md:gap-7 h-[815px] w-full">
                        <h1 className="flex flex-row text-center md:text-left md:max-w-[calc(50% + 90px)] w-[50%] md:w-[50%] text-[clamp(1rem,5vw,3.5rem)] py-6 font-[montserrat-extralight]">
                          {headerData?.data[0].header_banner_text
                            ? headerData?.data[0].header_banner_text
                            : "Lorem ipsum dolor sit amet consectetur adipisicing."}
                          <a
                            className="relative place-items-end top-2 cursor-pointer tooltip-header"
                            data-tooltip="Edit Content"
                            onClick={handleAddBanner}
                          >
                            <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                          </a>
                        </h1>
                        <button className="btn-primary">
                          {headerData?.data[0].header_button_text
                            ? headerData?.data[0].header_button_text
                            : "Button Text"}
                        </button>
                      </div>
                      <IoImageOutline className="text-[400px] text-gray-500 mt-8" />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="relative md:bg-no-repeat md:bg-cover"
                  style={{
                    backgroundImage: `url(${bannerImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className=" container_dashboard flex h-full ">
                    <div className=" flex flex-col items-center md:items-start md:justify-center h-full md:gap-7 md:h-[815px] ">
                      <h1 className="flex flex-row text-center md:text-left md:max-w-[calc(50% + 90px)] w-[50%] md:w-[50%] text-[clamp(1rem,5vw,3.5rem)] py-6 font-[montserrat-extralight]">
                        {headerData?.data[0].header_banner_text}
                        <a
                          className="relative  place-items-end top-[20px] cursor-pointer tooltip-header"
                          data-tooltip="Edit Content"
                          onClick={handleAddBanner}
                        >
                          <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                        </a>
                      </h1>
                      <button className="btn-primary">
                        {headerData?.data[0].header_button_text}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default DashboardBanner;
