import Loader from "@/components/partials/loader/Loader";
import React from "react";

const ServicesLoader = () => {
  return (
    <>
      <section className="py-20" id="services">
        <div className="container navigation-loader">
          <div className="flex flex-col justify-between  mb-16">
            <Loader customCss="mb-4 lg:w-[450px] h-[40px]" />
            <Loader customCss="mb-4 lg:w-[350px] h-[30px]" />
          </div>
        </div>
        <div className="services-products">
          <div className="container lg:max-w-[1170px] lg:mx-auto">
            <div className="wrapper lg:flex lg:flex-row lg:gap-14 md:flex-row md:flex-wrap md:gap-5 md:mt-10 md:min-h-[100px]">
              <div className="grid place-items-center relative group">
                <Loader customCss="md:w-[20rem] md:h-[10rem] mb-4" />
                <div className="bannerText relative">
                  <Loader customCss="mb-4 lg:w-[20rem] h-[30px] mb-10" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[100px] h-[30px]" />
                </div>
              </div>
              <div className="grid place-items-center relative group">
                <Loader customCss="md:w-[20rem] md:h-[10rem] mb-4" />
                <div className="bannerText relative">
                  <Loader customCss="mb-4 lg:w-[20rem] h-[30px] mb-10" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[100px] h-[30px]" />
                </div>
              </div>
              <div className="grid place-items-center relative group">
                <Loader customCss="md:w-[20rem] md:h-[10rem] mb-4" />
                <div className="bannerText relative">
                  <Loader customCss="mb-4 lg:w-[20rem] h-[30px] mb-10" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 lg:w-[100px] h-[30px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesLoader;
