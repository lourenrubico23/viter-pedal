import React from "react";
import { HiPencil } from "react-icons/hi2";
import { FaRegImages } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";

const DashboardServices = ({setItemEdit, setIsAdd, setIsServices1, setIsServices2, setIsServices3}) => {
  const handleAddTitle = () => {
    setIsAdd(true);
    setItemEdit(null);
  };
  const handleAddServices1 = () => {
    setIsServices1(true);
    setItemEdit(null);
  };
  const handleAddServices2 = () => {
    setIsServices2(true);
    setItemEdit(null);
  };
  const handleAddServices3 = () => {
    setIsServices3(true);
    setItemEdit(null);
  };
  return (
    <>
      <section id="services">
        {/* choose your companion */}
        <div className="card_wrapper py-14 relative">
          <div className="container_dashboard lg:py-20">
            <div className="flex flex-col justify-center text-center pb-5 lg:text-left lg:pb-14 relative">
              <h2 className="text-[clamp(1rem,6vw,2.5rem)] font-[montserrat-medium]">
                Choose your Companion
              </h2>
              <h3 className="pt-2 text-[clamp(.5rem,4vw,1.3rem)] line-clamp-2 font-[montserrat-extralight]">
                Escape the Ordinary: Experience the Thrill
              </h3>
              <a
                className="absolute z-30 m-10 left-[470px] -top-9 cursor-pointer tooltip-header"
                data-tooltip="Edit Content" onClick={handleAddTitle}
              >
                <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-1 border-[1px] " />
              </a>
            </div>

            <div className="cards_wrapper flex flex-col lg:flex lg:flex-row lg:gap-14 md:flex-row md:flex-wrap md:gap-5 md:mt-10 md:min-h-[100px]">
              <div className="py-8 lg:py-0">
                <div className="cards">
                  <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[23rem] relative ">
                    <a
                      className="absolute z-30 m-10 right-[4px] -top-14 cursor-pointer tooltip-header"
                      data-tooltip="Edit Content" onClick={handleAddServices1}
                    >
                      <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-1 border-[1px] " />
                    </a>
                    <div className="image_wrapper md:w-[20rem] md:h-[10rem]">
                      <img
                        src="./img/bike1.webp"
                        alt=""
                        className="object-contain md:h-full md:w-full"
                      />
                    </div>
                    <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                      Sed ut perspiciatis
                    </h3>
                    <div className="md:min-h-[100px]">
                      <p className="text-[clamp(.7rem,4.7vw,16px)]">
                        Amet, consectetur adipiscing elit, sed do eiusmod
                        tempor.
                      </p>
                    </div>
                    <button className="btn-light">Talk to Us</button>
                  </div>
                </div>
              </div>
              <div className="py-8 lg:py-0">
                <div className="cards">
                  <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[23rem] relative">
                    <a
                      className="absolute z-30 m-10 right-[4px] -top-14 cursor-pointer tooltip-header"
                      data-tooltip="Edit Content" onClick={handleAddServices2}
                    >
                      <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-1 border-[1px] " />
                    </a>
                    <div className="image_wrapper md:w-[20rem] md:h-[10rem] ">
                      <img
                        src="./img/bike2.webp"
                        alt=""
                        className="object-contain md:h-full md:w-full"
                      />
                    </div>

                    <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                      Lorem ipsum dolor
                    </h3>
                    <div className="md:h-[100px]">
                      <p className="text-[clamp(.7rem,4.7vw,16px)]">
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis.
                      </p>
                    </div>
                    <button className="btn-light">Talk to Us</button>
                  </div>
                </div>
              </div>
              <div className="py-8 lg:py-0">
                <div className="cards">
                  <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[23rem] relative">
                    <a
                      className="absolute z-30 m-10 right-[4px] -top-14 cursor-pointer tooltip-header"
                      data-tooltip="Edit Content" onClick={handleAddServices3}
                    >
                      <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-1 border-[1px] " />
                    </a>
                    <div className="image_wrapper md:w-[20rem] md:h-[10rem]">
                      <img
                        src="./img/bike3.webp"
                        alt=""
                        className="object-contain md:h-full md:w-full"
                      />
                    </div>
                    <h3 className="text-[clamp(.7rem,4.7vw,18px)] font-[montserrat-extrabold]">
                      Nemo enim ipsam
                    </h3>
                    <div className="md:h-[100px]">
                      <p className="text-[clamp(.7rem,4.7vw,16px)]">
                        Consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum quia dolor.
                      </p>
                    </div>
                    <button className="btn-light">Talk to Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardServices;
