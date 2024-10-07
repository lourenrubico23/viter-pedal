import { HiPencil } from "react-icons/hi2";
import TestimonialLoader from "./TestimonialLoader";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { IoImageOutline } from "react-icons/io5";

const DashboardTestimonial = ({
  setItemEdit,
  setIsAdd,
  setIsFirst,
  setIsSecond,
  setIsThird,
  isFetching,
  testimonialData,
}) => {
  const handleAddTitle = () => {
    setIsAdd(true);
    setItemEdit("titleUpdate");
  };
  const handleAddFirst = () => {
    setIsFirst(true);
    setItemEdit("testimonialAUpdate");
  };
  const handleAddSecond = () => {
    setIsSecond(true);
    setItemEdit("testimonialBUpdate");
  };
  const handleAddThird = () => {
    setIsThird(true);
    setItemEdit("testimonialCUpdate");
  };
  return (
    <>
      {/* feedback */}
      <section id="testimonials" className="bg-primary">
        {isFetching ? (
          <TestimonialLoader />
        ) : (
          <div className="feedback_wrapper py-12 md:h-[800px] md:py-[140px]">
            <div className="container_dashboard">
              <div className="feedback-title flex flex-col items-center pb-5 md:pb-20">
                <h2 className=" flex text-[clamp(1rem,5vw,48px)] font-[montserrat-extralight] text-center leading-tight pt-10">
                  {testimonialData?.data[0].testimonial_title
                    ? testimonialData?.data[0].testimonial_title
                    : "Lorem ipsum dolor sit"}
                  <a
                    className="relative m-5 cursor-pointer tooltip-header"
                    data-tooltip="Edit Content"
                    onClick={handleAddTitle}
                  >
                    <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                  </a>
                </h2>
                <h3 className="text-center block md:hidden">
                  {testimonialData?.data[0].testimonial_subtitle
                    ? testimonialData?.data[0].testimonial_subtitle
                    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus deleniti accusamus veniam corrupti explicabo?"}
                </h3>
              </div>

              <div className="cards_wrapper flex flex-col md:flex md:flex-row md:flex-wrap md:gap-4 lg:flex lg:flex-row lg:flex-nowrap lg:pt-4 lg:gap-[62px]">
                {testimonialData?.data[0].testimonial_img_a === "" ? (
                  <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5 relative">
                    <a
                      className="absolute m-10 right-0 -top-10 cursor-pointer tooltip-header"
                      data-tooltip="Edit Content"
                      onClick={handleAddFirst}
                    >
                      <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                    </a>
                    <div className="w-[6rem] h-[5rem] mb-[110px] bg-gray-300 rounded-md place-self-start flex items-center">
                      <IoImageOutline className="text-[30px] mx-auto text-gray-500 " />
                    </div>

                    <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] relative">
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
                ) : (
                  <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5 relative">
                    <a
                      className="absolute m-10 right-0 -top-10 cursor-pointer tooltip-header"
                      data-tooltip="Edit Content"
                      onClick={handleAddFirst}
                    >
                      <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                    </a>
                    <div className="w-[6rem] lg:w-[30%] place-self-start ">
                      <img
                        src={`${devBaseImgUrl}/${testimonialData?.data[0].testimonial_img_a}`}
                        alt=""
                        className="object-contain object-top md:h-full md:w-full rounded-lg"
                      />
                    </div>

                    <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] relative place-self-start">
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
                )}

                <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5 relative">
                  <a
                    className="absolute m-10 right-0 -top-10 cursor-pointer tooltip-header"
                    data-tooltip="Edit Content"
                    onClick={handleAddSecond}
                  >
                    <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                  </a>
                  {testimonialData?.data[0].testimonial_img_b === "" ? (
                    <div className="w-[6rem] h-[5rem] mb-[110px] bg-gray-300 rounded-md place-self-start flex items-center">
                      <IoImageOutline className="text-[30px] mx-auto text-gray-500 " />
                    </div>
                  ) : (
                    <div className="w-[6rem] lg:w-[30%] place-self-start">
                      <img
                        src={`${devBaseImgUrl}/${testimonialData?.data[0].testimonial_img_b}`}
                        alt=""
                        className="object-contain object-top lg:h-full lg:w-full rounded-lg"
                      />
                    </div>
                  )}
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
                <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5 relative">
                  <a
                    className="absolute m-10 right-0 -top-10 cursor-pointer tooltip-header"
                    data-tooltip="Edit Content"
                    onClick={handleAddThird}
                  >
                    <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                  </a>
                  {testimonialData?.data[0].testimonial_img_c === "" ? (
                    <div className="w-[6rem] h-[5rem] mb-[110px] bg-gray-300 rounded-md place-self-start flex items-center">
                      <IoImageOutline className="text-[30px] mx-auto text-gray-500 " />
                    </div>
                  ) : (
                    <div className="w-[6rem] lg:w-[30%] place-self-start">
                      <img
                        src={`${devBaseImgUrl}/${testimonialData?.data[0].testimonial_img_c}`}
                        alt=""
                        className="object-contain object-top lg:h-full lg:w-full rounded-lg"
                      />
                    </div>
                  )}

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
        )}
      </section>
    </>
  );
};

export default DashboardTestimonial;
