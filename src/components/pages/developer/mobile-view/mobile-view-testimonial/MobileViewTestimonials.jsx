import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";

const MobileViewTestimonials = () => {
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
      <div className="feedback_wrapper py-12 bg-primary" id="testimonials">
        <div className="container">
          <div className="feedback-title flex flex-col items-center pb-5">
            <h2 className="text-[1.2rem] font-[montserrat-extralight]">
              {testimonialData?.data[0].testimonial_title
                ? testimonialData?.data[0].testimonial_title
                : "Lorem ipsum dolor sit"}
            </h2>
            <h3 className="text-center block">
              {testimonialData?.data[0].testimonial_subtitle
                ? testimonialData?.data[0].testimonial_subtitle
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus deleniti accusamus veniam corrupti explicabo?"}
            </h3>
          </div>
          <div className="cards_wrapper flex flex-col">
            <div className="flex flex-col items-center gap-4 py-5">
              <div className="w-[6rem] h-[6rem]">
                <img
                  src={`${devBaseImgUrl}/${testimonialData?.data[0].testimonial_img_a}`}
                  alt=""
                  className="object-contain object-top rounded-lg"
                />
              </div>

              <div className="content flex flex-col items-center gap-2">
                <h3 className="text-[1rem] font-[montserrat-extrabold]">
                  {testimonialData?.data[0].testimonial_name_a
                    ? testimonialData?.data[0].testimonial_name_a
                    : "Lorem ipsum dolor sit"}
                </h3>
                <p className="">
                  {testimonialData?.data[0].testimonial_description_a
                    ? testimonialData?.data[0].testimonial_description_a
                    : "Lorem ipsum dolor sit amet consectetur. Neque risusaugue eget vel pellentesque amet diam amet ultricies. Sapien suspendisse sollicitudin dignissim cursus. Ut acmorbi pretium eget porta magna arcu sit nam. Quis arcuvitae id mi."}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-5 ">
              <div className="w-[6rem] h-[6rem]">
                <img
                  src={`${devBaseImgUrl}/${testimonialData?.data[0].testimonial_img_b}`}
                  alt=""
                  className="object-contain object-top rounded-lg"
                />
              </div>
              <div className="content flex flex-col items-center gap-2">
                <h3 className="text-[1rem] font-[montserrat-extrabold]">
                  {testimonialData?.data[0].testimonial_name_b
                    ? testimonialData?.data[0].testimonial_name_b
                    : "Lorem ipsum dolor sit"}
                </h3>
                <p className="">
                  {testimonialData?.data[0].testimonial_description_b
                    ? testimonialData?.data[0].testimonial_description_b
                    : "Lorem ipsum dolor sit amet consectetur. Neque risusaugue eget vel pellentesque amet diam amet ultricies. Sapien suspendisse sollicitudin dignissim cursus. Ut acmorbi pretium eget porta magna arcu sit nam. Quis arcuvitae id mi."}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-5 ">
              <div className="w-[6rem] h-[6rem]">
                <img
                  src={`${devBaseImgUrl}/${testimonialData?.data[0].testimonial_img_c}`}
                  alt=""
                  className="object-contain object-top rounded-lg"
                />
              </div>
              <div className="content flex flex-col items-center gap-2">
                <h3 className="text-[1rem] font-[montserrat-extrabold]">
                  {testimonialData?.data[0].testimonial_name_c
                    ? testimonialData?.data[0].testimonial_name_c
                    : "Lorem ipsum dolor sit"}
                </h3>
                <p className="">
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

export default MobileViewTestimonials;
