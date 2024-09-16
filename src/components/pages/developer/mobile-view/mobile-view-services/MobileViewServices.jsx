import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";

const MobileViewServices = () => {
  const {
    isFetching,
    error,
    data: servicesData,
  } = useQueryData(
    "/v1/services", // endpoint
    "get", // method
    "services" // key
  );

  return (
    <>
      <div className="card_wrapper py-14 " id="services">
        <div className="container">
          <div className="flex flex-col justify-center text-center pb-5">
            <h2 className="text-[1.5rem] font-[montserrat-medium]">
              {servicesData?.data[0].services_title}
            </h2>
            <h3 className="pt-2 text-[1rem] line-clamp-2 font-[montserrat-extralight]">
              {servicesData?.data[0].services_subtitle}
            </h3>
          </div>

          <div className="cards_wrapper flex flex-col">
            <div className="py-8 ">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center ">
                  <div className="image_wrapper">
                    <img
                      src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_a}`}
                      alt=""
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[1rem] font-[montserrat-extrabold]">
                    {servicesData?.data[0].services_product_a}
                  </h3>
                  <div className="md:min-h-[100px]">
                    <p className="text-[clamp(.7rem,4.7vw,16px)]">
                      {servicesData?.data[0].services_description_a}
                    </p>
                  </div>
                  <button className="btn-light">
                    {servicesData?.data[0].services_button_text_a}
                  </button>
                </div>
              </div>
            </div>
            <div className="py-8">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center">
                  <div className="image_wrapper ">
                    <img
                      src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_b}`}
                      alt=""
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-[1rem] font-[montserrat-extrabold]">
                    {servicesData?.data[0].services_product_b}
                  </h3>
                  <div>
                    <p className="text-[1rem]">
                      {servicesData?.data[0].services_description_b}
                    </p>
                  </div>
                  <button className="btn-light">
                    {servicesData?.data[0].services_button_text_b}
                  </button>
                </div>
              </div>
            </div>
            <div className="py-8 ">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center">
                  <div className="image_wrapper ">
                    <img
                      src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_c}`}
                      alt=""
                      className="object-contain "
                    />
                  </div>
                  <h3 className="text-[1rem] font-[montserrat-extrabold]">
                    {servicesData?.data[0].services_product_c}
                  </h3>
                  <div>
                    <p className="text-[1rem]">
                      {servicesData?.data[0].services_description_c}
                    </p>
                  </div>
                  <button className="btn-light">
                    {servicesData?.data[0].services_button_text_c}
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

export default MobileViewServices;
