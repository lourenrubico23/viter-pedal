import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";

const Banner = () => {
  const {
    isLoading,
    error,
    data: headerData,
  } = useQueryData(
    "/v1/header", // endpoint
    "get", // method
    "header" // key
  );

  const bannerImg = `${devBaseImgUrl}/${headerData?.data[0].header_banner_img}`;

  return (
    <div
      className="banner "
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex h-full md:bg-transparent bg-primary ">
        <div className="banner_wrapper flex flex-col items-center md:items-start md:justify-center h-full md:gap-7 md:h-[815px] mx-auto md:mx-0 min-h-[130px]">
          <h1 className="text-center md:text-left md:max-w-[calc(50% + 90px)] md:w-[600px] text-[clamp(1rem,5vw,3.5rem)] py-6 font-[montserrat-extralight] md:text-[3.5rem] ">
            {headerData?.data[0].header_banner_text
              ? headerData?.data[0].header_banner_text
              : "No Data"}
          </h1>
          <button className="btn-primary">
            {headerData?.data[0].header_button_text}
          </button>
        </div>
      </div>

      <div className="md:hidden relative ">
        <div className="bg-gradient-to-b from-white to-transparent absolute h-[2rem] w-full"></div>
        <img
          src={`${devBaseImgUrl}/${headerData?.data[0].header_banner_img}`}
          alt=""
          className="w-full object-cover h-[25rem] "
        />
      </div>
    </div>
  );
};

export default Banner;
