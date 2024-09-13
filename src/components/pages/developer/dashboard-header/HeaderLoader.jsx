import Loader from "@/components/partials/loader/Loader";
import React from "react";

const HeaderLoader = () => {
  return (
    <>
      <header className="py-2.5" id="header">
        <div className="container navigation-loader">
          <div className="flex flex-row justify-between border-b-2">
            <Loader customCss="mb-4 lg:w-[150px] h-[40px]" />
            <Loader customCss="mb-4 lg:w-[450px] h-[40px]" />
          </div>
        </div>
        <div className="heroBanner">
          <div className="container lg:max-w-[1170px] lg:mx-auto">
            <div className="wrapper grid md:grid-cols-2 gap-4 place-items-center  px-4">
              <div className="bannerText relative">
                <Loader customCss="mb-4 lg:w-[500px] h-[30px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[100px] h-[30px]" />
              </div>
              <div className="grid place-items-center relative group">
                <Loader customCss="lg:w-[410px] h-[400px] mb-4" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderLoader;
