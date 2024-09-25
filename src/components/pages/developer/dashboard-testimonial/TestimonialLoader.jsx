import Loader from "@/components/partials/loader/Loader";
import React from "react";

const TestimonialLoader = () => {
  return (
    <>
      <section className="py-20" id="testimonials">
        <div className="container navigation-loader">
          <div className="mb-16 flex justify-center">
            <Loader customCss="mb-4 w-[450px] h-[50px] " />
          </div>
        </div>
        <div className="testimonial-loader mt-20">
          <div className="container w-[1170px] h-[300px] mx-auto">
            <div className=" flex flex-row gap-5 h-[13rem]">
              <div className="grid grid-cols-[1fr,2fr] gap-2 relative group">
                <Loader customCss="w-[7rem] h-[7rem] mb-16" />
                <div className="bannerText relative">
                  <Loader customCss="mb-4 w-[20rem] h-[30px] mb-10" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                </div>
              </div>
              <div className="grid grid-cols-[1fr,2fr] gap-2 relative group ">
                <Loader customCss="md:w-[7rem] md:h-[7rem] mb-16" />
                <div className="bannerText relative">
                  <Loader customCss="mb-4 w-[20rem] h-[30px] mb-10" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                </div>
              </div>
              <div className="grid grid-cols-[1fr,2fr] gap-2 relative group">
                <Loader customCss="md:w-[7rem] md:h-[7rem] mb-16" />
                <div className="bannerText relative">
                  <Loader customCss="mb-4 w-[20rem] h-[30px] mb-10" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                  <Loader customCss="mb-4 w-[20rem] h-[15px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialLoader;
