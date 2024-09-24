import Loader from "@/components/partials/loader/Loader";
import React from "react";

const AboutLoader = () => {
  return (
    <>
      <section className="py-2.5" id="about"> 
        <div className="heroBanner">
          <div className="container lg:max-w-[1170px] lg:mx-auto">
            <div className="wrapper grid md:grid-cols-2 gap-4 place-items-center  px-4">
              <Loader customCss="mb-4 lg:max-w-[612px] min-h-[860px]" />
              <div className="bannerText relative">
                <Loader customCss="mb-4 lg:w-[500px] h-[40px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <div className="mt-[5rem]">
                <Loader customCss="mb-4 lg:w-[500px] h-[30px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                </div>
                <div className="mt-[5rem]">
                <Loader customCss="mb-4 lg:w-[500px] h-[30px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                </div>
                <div className="mt-[5rem]">
                <Loader customCss="mb-4 lg:w-[500px] h-[30px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                </div>
              </div>
            </div>
            <div className="wrapper grid md:grid-cols-2 gap-4 place-items-center  px-4">
              <div className="bannerText relative">
                <Loader customCss="mb-4 lg:w-[500px] h-[40px]" />
                <div className="mt-[5rem]">
                <Loader customCss="mb-4 lg:w-[500px] h-[30px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[500px] h-[15px]" />
                </div>
                <div className="mt-[5rem]">
                <Loader customCss="mb-4 lg:w-[300px] h-[30px]" />
                <Loader customCss="mb-4 lg:w-[400px] h-[40px]" />
                </div>
              </div>
              <Loader customCss="mb-4 lg:max-w-[612px] min-h-[860px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutLoader;
