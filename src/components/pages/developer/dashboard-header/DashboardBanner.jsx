import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { FaRegImages } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { IoImageOutline } from "react-icons/io5";
import React from "react";

const DashboardBanner = ({
  setIsAdd,
  setItemEdit,
  setIsNav,
  setIsBanner,
  headerData,
}) => {
  const handleAddLogo = (item) => {
    setIsAdd(true);
    setItemEdit(item);
  };
  const handleAddNav = (item) => {
    setIsNav(true);
    setItemEdit(item);
  };
  const handleAddBanner = (item) => {
    setIsBanner(true);
    setItemEdit(item);
  };

  const bannerImg = `${devBaseImgUrl}/${headerData?.data[0].header_banner_img}`;

  return (
    <>
      <section className="" id="header">
        <div className="container_dashboard py-0 px-3 md:max-w-full md:px-6 md:py-0 mx-auto relative bg-primary ">
          {headerData?.data.map((item, key) => (
            <div className="flex justify-between items-center" key={key}>
              {item.header_logo_img === "" ? (
                <div className="py-1 w-[115px] h-[37px] relative">
                  <IoImageOutline className="text-[30px] mx-auto text-gray-500" />
                  <a
                    className="absolute z-30 m-10 left-20 -top-9 cursor-pointer tooltip-header"
                    data-tooltip="Upload Logo"
                    onClick={() => handleAddLogo(item)}
                  >
                    <FaRegImages className=" bg-accent rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
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
                    className="absolute z-30 m-10 left-20 -top-9 cursor-pointer tooltip-header"
                    data-tooltip="Upload Logo"
                    onClick={() => handleAddLogo(item)}
                  >
                    <FaRegImages className=" bg-accent rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                  </a>
                </div>
              )}
              <nav>
                <ul className="nav relative" key={key}>
                  <a
                    className="absolute z-30 m-10 right-[400px] -top-6 cursor-pointer tooltip-header-nav"
                    data-tooltip="Edit Text"
                    onClick={() => handleAddNav(item)}
                  >
                    <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-[5px] border-[1px]" />
                  </a>
                  <li className="hover:text-accent cursor-pointer">
                    {item.header_nav_a}
                  </li>
                  <li className="hover:text-accent cursor-pointer">
                    {item.header_nav_b}
                  </li>
                  <li className="hover:text-accent cursor-pointer">
                    {item.header_nav_c}
                  </li>
                  <li className="hover:text-accent cursor-pointer">
                    {item.header_nav_d}
                  </li>
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {headerData?.data.map((item, key) => (
          <div key={key}>
            {item.header_banner_img === "" ? (
              <div className="relative md:bg-no-repeat md:bg-cover">
                <div className=" container_dashboard flex h-full ">
                  <div className="py-1 grid grid-cols-2 gap-3 w-[100%] h-[100%] relative">
                    <IoImageOutline className="text-[500px] text-gray-500" />
                    <a
                      className="absolute z-30 m-10 left-[270px] top-56 cursor-pointer tooltip-header"
                      data-tooltip="Edit Content"
                      onClick={() => handleAddBanner(item)}
                    >
                      <FaRegImages className=" bg-accent rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="relative md:bg-no-repeat md:bg-cover"
                style={{
                  backgroundImage: `url(${bannerImg})`,
                  backgroundSize: 'cover',  // Makes sure the image covers the entire div
    backgroundPosition: 'center',  // Centers the image within the div
    backgroundRepeat: 'no-repeat'
                }}
              >
                <div className=" container_dashboard flex h-full ">
                  <div className=" flex flex-col items-center md:items-start md:justify-center h-full md:gap-7 md:h-[815px] ">
                    <h1 className="relative text-center md:text-left md:max-w-[calc(50% + 90px)] w-[50%] md:w-[50%] text-[clamp(1rem,5vw,3.5rem)] py-6 font-[montserrat-extralight]">
                      {item.header_banner_text}
                      <a
                        className="absolute z-30 m-10 place-items-end top-2 cursor-pointer tooltip-header"
                        data-tooltip="Edit Content"
                        onClick={() => handleAddBanner(item)}
                      >
                        <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-[5px] border-[1px]" />
                      </a>
                    </h1>
                    <button className="btn-primary">
                      {item.header_button_text}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        
      </section>
    </>
  );
};

export default DashboardBanner;
