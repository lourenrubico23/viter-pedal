import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

const Testimonial = () => {
  const {
    isFetching,
    error,
    data: testimonialData,
  } = useQueryData(
    "/v1/testimonial", // endpoint
    "get", // method
    "testimonial" // key
  );

  return (
    <>
      {/* feedback */}
      <div
        className="feedback_wrapper py-12 md:py-32 md:pb-28 bg-primary"
        id="testimonials"
      >
        <div className="container">
          <div className="feedback-title flex flex-col items-center pb-5 md:pb-20">
            <h2 className="text-[clamp(1rem,5vw,48px)] font-[montserrat-extralight] text-center leading-tight">
              {testimonialData?.data[0].testimonial_title
                ? testimonialData?.data[0].testimonial_title
                : "Lorem ipsum dolor sit"}
            </h2>
            <h3 className="text-center block md:hidden">
              {testimonialData?.data[0].testimonial_subtitle
                ? testimonialData?.data[0].testimonial_subtitle
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus deleniti accusamus veniam corrupti explicabo?"}
            </h3>
          </div>
          <div className="cards_wrapper flex flex-col md:flex md:flex-row md:flex-wrap md:gap-4 lg:flex lg:flex-row lg:flex-nowrap lg:pt-4 lg:gap-[62px]">
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] lg:w-[30%] lg:place-self-start ">
                <img
                  src={`${devBaseImgUrl}/${testimonialData?.data[0].testimonial_img_a}`}
                  alt=""
                  className="object-contain object-top md:h-full md:w-full rounded-lg"
                />
              </div>

              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] place-self-start">
                <h3 className="text-[clamp(.6rem,4vw,16px)] font-[montserrat-extrabold] md:pb-4">
                  {testimonialData?.data[0].testimonial_name_a
                    ? testimonialData?.data[0].testimonial_name_a
                    : "Lorem ipsum dolor sit"}
                </h3>
                <p className="md:font-bold md:min-h-[160px]">
                  {testimonialData?.data[0].testimonial_description_a
                    ? testimonialData?.data[0].testimonial_description_a
                    : "Lorem ipsum dolor sit amet consectetur. Neque risusaugue eget vel pellentesque amet diam amet ultricies. Sapien suspendisse sollicitudin dignissim cursus. Ut acmorbi pretium eget porta magna arcu sit nam. Quis arcuvitae id mi."}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] lg:w-[30%] lg:place-self-start">
                <img
                  src={`${devBaseImgUrl}/${testimonialData?.data[0].testimonial_img_b}`}
                  alt=""
                  className="object-contain object-top lg:h-full lg:w-full rounded-lg"
                />
              </div>
              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] place-self-start">
                <h3 className="text-[clamp(.6rem,4vw,16px)] font-[montserrat-extrabold] md:pb-4">
                  {testimonialData?.data[0].testimonial_name_b
                    ? testimonialData?.data[0].testimonial_name_b
                    : "Lorem ipsum dolor sit"}
                </h3>
                <p className="md:font-bold md:min-h-[160px]">
                  {testimonialData?.data[0].testimonial_description_b
                    ? testimonialData?.data[0].testimonial_description_b
                    : "Lorem ipsum dolor sit amet consectetur. Neque risusaugue eget vel pellentesque amet diam amet ultricies. Sapien suspendisse sollicitudin dignissim cursus. Ut acmorbi pretium eget porta magna arcu sit nam. Quis arcuvitae id mi."}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] lg:w-[30%] lg:place-self-start">
                <img
                  src={`${devBaseImgUrl}/${testimonialData?.data[0].testimonial_img_c}`}
                  alt=""
                  className="object-contain object-top lg:h-full lg:w-full rounded-lg"
                />
              </div> 
              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] place-self-start">
                <h3 className="text-[clamp(.6rem,4vw,16px)] font-[montserrat-extrabold] md:pb-4">
                  {testimonialData?.data[0].testimonial_name_c
                    ? testimonialData?.data[0].testimonial_name_c
                    : "Lorem ipsum dolor sit"}
                </h3>
                <p className="md:font-bold md:min-h-[160px]">
                  {testimonialData?.data[0].testimonial_description_c
                    ? testimonialData?.data[0].testimonial_description_c
                    : "Lorem ipsum dolor sit amet consectetur. Neque risusaugue eget vel pellentesque amet diam amet ultricies. Sapien suspendisse sollicitudin dignissim cursus. Ut acmorbi pretium eget porta magna arcu sit nam. Quis arcuvitae id mi."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
