import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";
import { IoImageOutline } from "react-icons/io5";

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
      <div className="card_wrapper py-14 bg-primary" id="services">
        <div className="container">
          <div className="flex flex-col justify-center text-center pb-5">
            <h2 className="text-[1.5rem] font-[montserrat-medium]">
              {servicesData?.data[0].services_title
                ? servicesData?.data[0].services_title
                : "Lorem ipsum dolor sit amet."}
            </h2>
            <h3 className="pt-2 text-[1rem] line-clamp-2 font-[montserrat-extralight]">
              {servicesData?.data[0].services_subtitle
                ? servicesData?.data[0].services_subtitle
                : "Lorem ipsum dolor sit amet."}
            </h3>
          </div>

          <div className="cards_wrapper flex flex-col">
            <div className="py-8 ">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center ">
                  {servicesData?.data[0].services_img_a === "" ? (
                    <div className="image_wrapper w-[20rem] h-[10rem] bg-gray-300 place-content-center">
                      <IoImageOutline className="text-[40px] mx-auto text-gray-500 " />
                    </div>
                  ) : (
                    <div className="image_wrapper">
                      <img
                        src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_a}`}
                        alt=""
                        className="object-contain"
                      />
                    </div>
                  )}

                  <h3 className="text-[1rem] font-[montserrat-extrabold]">
                    {servicesData?.data[0].services_product_a
                      ? servicesData?.data[0].services_product_a
                      : "Lorem ipsum dolor sit amet consectetur."}
                  </h3>
                  <div className="md:min-h-[100px]">
                    <p className="text-[clamp(.7rem,4.7vw,16px)]">
                      {servicesData?.data[0].services_description_a
                        ? servicesData?.data[0].services_description_a
                        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehenderit?"}
                    </p>
                  </div>
                  <button className="btn-light">
                    {servicesData?.data[0].services_button_text_a
                      ? servicesData?.data[0].services_button_text_a
                      : "Lorem, ipsum dolor."}
                  </button>
                </div>
              </div>
            </div>
            <div className="py-8">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center text-center">
                  {servicesData?.data[0].services_img_b === "" ? (
                    <div className="image_wrapper w-[20rem] h-[10rem] bg-gray-300 place-content-center">
                      <IoImageOutline className="text-[40px] mx-auto text-gray-500 " />
                    </div>
                  ) : (
                    <div className="image_wrapper">
                      <img
                        src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_b}`}
                        alt=""
                        className="object-contain"
                      />
                    </div>
                  )}

                  <h3 className="text-[1rem] font-[montserrat-extrabold]">
                    {servicesData?.data[0].services_product_b
                      ? servicesData?.data[0].services_product_b
                      : "Lorem ipsum dolor sit amet consectetur."}
                  </h3>
                  <div className="md:min-h-[100px]">
                    <p className="text-[clamp(.7rem,4.7vw,16px)]">
                      {servicesData?.data[0].services_description_b
                        ? servicesData?.data[0].services_description_b
                        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehenderit?"}
                    </p>
                  </div>
                  <button className="btn-light">
                    {servicesData?.data[0].services_button_text_b
                      ? servicesData?.data[0].services_button_text_b
                      : "Lorem, ipsum dolor."}
                  </button>
                </div>
              </div>
            </div>
            <div className="py-8 ">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center">
                {servicesData?.data[0].services_img_c === "" ? (
                    <div className="image_wrapper w-[20rem] h-[10rem] bg-gray-300 place-content-center">
                      <IoImageOutline className="text-[40px] mx-auto text-gray-500 " />
                    </div>
                  ) : (
                    <div className="image_wrapper">
                      <img
                        src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_c}`}
                        alt=""
                        className="object-contain"
                      />
                    </div>
                  )}

                  <h3 className="text-[1rem] font-[montserrat-extrabold]">
                    {servicesData?.data[0].services_product_c
                      ? servicesData?.data[0].services_product_c
                      : "Lorem ipsum dolor sit amet consectetur."}
                  </h3>
                  <div className="md:min-h-[100px]">
                    <p className="text-[clamp(.7rem,4.7vw,16px)]">
                      {servicesData?.data[0].services_description_c
                        ? servicesData?.data[0].services_description_c
                        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehenderit?"}
                    </p>
                  </div>
                  <button className="btn-light">
                    {servicesData?.data[0].services_button_text_c
                      ? servicesData?.data[0].services_button_text_c
                      : "Lorem, ipsum dolor."}
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
