import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";

const Services = () => {
  const {
    isLoading,
    error,
    data: servicesData,
  } = useQueryData(
    "/v1/services", // endpoint
    "get", // method
    "services" // key
  );
  return (
    <>
      {/* choose your companion */}
      <div className="card_wrapper py-14 " id="services">
        <div className="container lg:py-20">
          <div className="flex flex-col justify-center text-center pb-5 lg:text-left lg:pb-14">
            <h2 className="text-[clamp(1rem,6vw,2.5rem)] font-[montserrat-medium]">
              {servicesData?.data[0].services_title
                ? servicesData?.data[0].services_title
                : "Lorem ipsum dolor sit amet."}
            </h2>
            <h3 className="pt-2 text-[clamp(.5rem,4vw,1.3rem)] line-clamp-2 font-[montserrat-extralight]">
              {servicesData?.data[0].services_subtitle
                ? servicesData?.data[0].services_subtitle
                : "Lorem ipsum dolor sit amet."}
            </h3>
          </div>

          <div className="cards_wrapper flex flex-col lg:flex lg:flex-row lg:gap-14 md:flex-row md:flex-wrap md:gap-5 md:mt-10 md:min-h-[100px]">
            <div className="py-8 lg:py-0">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[26rem] ">
                  <div className="image_wrapper md:w-[20rem] md:h-[10rem]">
                    <img
                      src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_a}`}
                      alt=""
                      className="object-contain md:h-full md:w-full"
                    />
                  </div>
                  <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                    {servicesData?.data[0].services_product_a
                      ? servicesData?.data[0].services_product_a
                      : "Sed ut perspiciatis"}
                  </h3>
                  <div className="md:min-h-[100px]">
                    <p className="text-[clamp(.7rem,4.7vw,16px)]">
                      {servicesData?.data[0].services_description_a
                        ? servicesData?.data[0].services_description_a
                        : "Amet, consectetur adipiscing elit, sed do eiusmod tempor."}
                    </p>
                  </div>
                  <button className="btn-light">
                    {servicesData?.data[0].services_button_text_a
                      ? servicesData?.data[0].services_button_text_a
                      : "Button text here."}
                  </button>
                </div>
              </div>
            </div>
            <div className="py-8 lg:py-0">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[26rem]">
                  <div className="image_wrapper md:w-[20rem] md:h-[10rem] ">
                    <img
                      src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_b}`}
                      alt=""
                      className="object-contain md:h-full md:w-full"
                    />
                  </div>

                  <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                    {servicesData?.data[0].services_product_b
                      ? servicesData?.data[0].services_product_b
                      : "Sed ut perspiciatis"}
                  </h3>
                  <div className="md:h-[100px]">
                    <p className="text-[clamp(.7rem,4.7vw,16px)]">
                      {servicesData?.data[0].services_description_b
                        ? servicesData?.data[0].services_description_b
                        : "Amet, consectetur adipiscing elit, sed do eiusmod tempor."}
                    </p>
                  </div>
                  <button className="btn-light">
                    {servicesData?.data[0].services_button_text_b
                      ? servicesData?.data[0].services_button_text_b
                      : "Button text here."}
                  </button>
                </div>
              </div>
            </div>
            <div className="py-8 lg:py-0">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[26rem]">
                  <div className="image_wrapper md:w-[20rem] md:h-[10rem]">
                    <img
                      src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_c}`}
                      alt=""
                      className="object-contain md:h-full md:w-full"
                    />
                  </div>
                  <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                    {servicesData?.data[0].services_product_c
                      ? servicesData?.data[0].services_product_c
                      : "Sed ut perspiciatis"}
                  </h3>
                  <div className="md:h-[100px]">
                    <p className="text-[clamp(.7rem,4.7vw,16px)]">
                      {servicesData?.data[0].services_description_c
                        ? servicesData?.data[0].services_description_c
                        : "Amet, consectetur adipiscing elit, sed do eiusmod tempor."}
                    </p>
                  </div>
                  <button className="btn-light">
                    {servicesData?.data[0].services_button_text_c
                      ? servicesData?.data[0].services_button_text_c
                      : "Button text here."}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
