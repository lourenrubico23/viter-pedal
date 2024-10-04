import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { HiPencil } from "react-icons/hi2";
import { IoImageOutline } from "react-icons/io5";
import ServicesLoader from "./ServicesLoader";

const DashboardServices = ({
  setItemEdit,
  setIsAdd,
  setIsServices1,
  setIsServices2,
  setIsServices3,
  servicesData,
  isFetching,
}) => {
  const handleAddTitle = () => {
    setIsAdd(true);
    setItemEdit("titleUpdate");
  };
  const handleAddServices1 = () => {
    setIsServices1(true);
    setItemEdit("productAUpdate");
  };
  const handleAddServices2 = () => {
    setIsServices2(true);
    setItemEdit("productBUpdate");
  };
  const handleAddServices3 = () => {
    setIsServices3(true);
    setItemEdit("productCUpdate");
  };
  return (
    <>
      <section id="services" className="bg-primary">
        {/* choose your companion */}
        {isFetching ? (
          <ServicesLoader />
        ) : (
          <div className="card_wrapper py-14 relative">
            <div className="container_dashboard lg:py-20">
              <div className="flex flex-col justify-center text-center pb-5 lg:text-left lg:pb-14">
                <h2 className="flex flex-row text-[clamp(1rem,6vw,2.5rem)] font-[montserrat-medium]">
                  {servicesData?.data[0].services_title
                    ? servicesData?.data[0].services_title
                    : "Lorem ipsum dolor sit amet."}
                  <a
                    className="relative cursor-pointer tooltip-header"
                    data-tooltip="Edit Content"
                    onClick={handleAddTitle}
                  >
                    <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                  </a>
                </h2>
                <h3 className="pt-2 text-[clamp(.5rem,4vw,1.3rem)] line-clamp-2 font-[montserrat-extralight]">
                  {servicesData?.data[0].services_subtitle
                    ? servicesData?.data[0].services_subtitle
                    : "Lorem ipsum dolor sit amet."}
                </h3>
              </div>

              <div className="cards_wrapper flex flex-col lg:flex lg:flex-row lg:gap-14 md:flex-row md:flex-wrap md:gap-5 md:mt-10 md:min-h-[100px]">
                <div className="py-8 lg:py-0">
                  {servicesData?.data.map((item, key) => (
                    <div className="cards" key={key}>
                      {item.services_img_a === "" ? (
                        <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[23rem] relative ">
                          <a
                            className="absolute m-10 right-[4px] -top-14 cursor-pointer tooltip-header"
                            data-tooltip="Edit Content"
                            onClick={handleAddServices1}
                          >
                            <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                          </a>
                          <div className="image_wrapper w-[20rem] h-[10rem] bg-gray-300 place-content-center">
                            <IoImageOutline className="text-[40px] mx-auto text-gray-500 " />
                          </div>
                          <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                            {item.services_product_a
                              ? item.services_product_a
                              : "Lorem ipsum dolor sit amet consectetur."}
                          </h3>
                          <div className="md:min-h-[100px]">
                            <p className="text-[clamp(.7rem,4.7vw,16px)]">
                              {item.services_description_a
                                ? item.services_description_a
                                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehenderit?"}
                            </p>
                          </div>
                          <button className="btn-light">
                            {item.services_button_text_a
                              ? item.services_button_text_a
                              : "Lorem, ipsum dolor."}
                          </button>
                        </div>
                      ) : (
                        <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[23rem] relative ">
                          <a
                            className="absolute m-10 right-[4px] -top-14 cursor-pointer tooltip-header"
                            data-tooltip="Edit Content"
                            onClick={handleAddServices1}
                          >
                            <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                          </a>
                          <div className="image_wrapper md:w-[20rem] md:h-[10rem]">
                            <img
                              src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_a}`}
                              alt=""
                              className="object-contain md:h-full md:w-full"
                            />
                          </div>
                          <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                            {item.services_product_a
                              ? item.services_product_a
                              : "Lorem ipsum dolor sit amet consectetur."}
                          </h3>
                          <div className="md:min-h-[100px]">
                            <p className="text-[clamp(.7rem,4.7vw,16px)]">
                              {item.services_description_a
                                ? item.services_description_a
                                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehenderit?"}
                            </p>
                          </div>
                          <button className="btn-light">
                            {item.services_button_text_a
                              ? item.services_button_text_a
                              : "Lorem, ipsum dolor."}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-8 lg:py-0">
                  <div className="cards">
                    {servicesData?.data.map((item, key) => (
                      <div key={key}>
                        {item.services_img_b === "" ? (
                          <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[23rem] relative">
                            <a
                              className="absolute m-10 right-[4px] -top-14 cursor-pointer tooltip-header"
                              data-tooltip="Edit Content"
                              onClick={handleAddServices2}
                            >
                              <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                            </a>
                            <div className="image_wrapper w-[20rem] h-[10rem] bg-gray-300 place-content-center">
                              <IoImageOutline className="text-[40px] mx-auto text-gray-500" />
                            </div>

                            <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                              {item.services_product_b
                                ? item.services_product_b
                                : "Lorem ipsum dolor sit amet consectetur."}
                            </h3>
                            <div className="md:h-[100px]">
                              <p className="text-[clamp(.7rem,4.7vw,16px)]">
                                {item.services_description_b
                                  ? item.services_description_b
                                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehenderit?"}
                              </p>
                            </div>
                            <button className="btn-light">
                              {item.services_button_text_b
                                ? item.services_button_text_b
                                : "Lorem, ipsum dolor."}
                            </button>
                          </div>
                        ) : (
                          <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[23rem] relative">
                            <a
                              className="absolute m-10 right-[4px] -top-14 cursor-pointer tooltip-header"
                              data-tooltip="Edit Content"
                              onClick={handleAddServices2}
                            >
                              <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                            </a>
                            <div className="image_wrapper md:w-[20rem] md:h-[10rem] ">
                              <img
                                src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_b}`}
                                alt=""
                                className="object-contain md:h-full md:w-full"
                              />
                            </div>

                            <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                              {item.services_product_b
                                ? item.services_product_b
                                : "Lorem ipsum dolor sit amet consectetur."}
                            </h3>
                            <div className="md:h-[100px]">
                              <p className="text-[clamp(.7rem,4.7vw,16px)]">
                                {item.services_description_b
                                  ? item.services_description_b
                                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehenderit?"}
                              </p>
                            </div>
                            <button className="btn-light">
                              {item.services_button_text_b
                                ? item.services_button_text_b
                                : "Lorem, ipsum dolor."}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="py-8 lg:py-0">
                  <div className="cards">
                    {servicesData?.data.map((item, key) => (
                      <div key={key}>
                        {item.services_img_c === "" ? (
                          <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[23rem] relative">
                            <a
                              className="absolute m-10 right-[4px] -top-14 cursor-pointer tooltip-header"
                              data-tooltip="Edit Content"
                              onClick={handleAddServices3}
                            >
                              <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                            </a>
                            <div className="image_wrapper w-[20rem] h-[10rem] bg-gray-300 place-content-center">
                              <IoImageOutline className="text-[40px] mx-auto text-gray-500" />
                            </div>
                            <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                              {item.services_product_c
                                ? item.services_product_c
                                : "Lorem ipsum dolor sit amet consectetur."}
                            </h3>
                            <div className="md:h-[100px]">
                              <p className="text-[clamp(.7rem,4.7vw,16px)]">
                                {item.services_description_c
                                  ? item.services_description_c
                                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehenderit?"}
                              </p>
                            </div>
                            <button className="btn-light">
                              {item.services_button_text_c
                                ? item.services_button_text_c
                                : "Lorem, ipsum dolor."}
                            </button>
                          </div>
                        ) : (
                          <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[23rem] relative">
                            <a
                              className="absolute m-10 right-[4px] -top-14 cursor-pointer tooltip-header"
                              data-tooltip="Edit Content"
                              onClick={handleAddServices3}
                            >
                              <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                            </a>
                            <div className="image_wrapper md:w-[20rem] md:h-[10rem]">
                              <img
                                src={`${devBaseImgUrl}/${servicesData?.data[0].services_img_c}`}
                                alt=""
                                className="object-contain md:h-full md:w-full"
                              />
                            </div>
                            <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                              {item.services_product_c
                                ? item.services_product_c
                                : "Lorem ipsum dolor sit amet consectetur."}
                            </h3>
                            <div className="md:h-[100px]">
                              <p className="text-[clamp(.7rem,4.7vw,16px)]">
                                {item.services_description_c
                                  ? item.services_description_c
                                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehenderit?"}
                              </p>
                            </div>
                            <button className="btn-light">
                              {item.services_button_text_c
                                ? item.services_button_text_c
                                : "Lorem, ipsum dolor."}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
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

export default DashboardServices;
