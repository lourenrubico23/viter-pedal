import React from "react";
import { FaAngleDoubleRight, FaAngleDoubleUp } from "react-icons/fa";

const MobileViewAbout = () => {
  return (
    <>
      <div>
        <div className="discover_wrapper" id="about">
          <div className="">
            <div className="container">
              <div className="">
                <div></div>
                <div className="dicover flex flex-col gap-4">
                  <h2 className="text-[1.5rem] font-[montserrat-extrabold] leading-7 text-center">
                    Discover the Beauty of Nature on Two Wheels
                  </h2>
                  <p className="py-2 text-[16px]">
                    Biking refers to the activity of riding a bicycle, which is
                    a pedal-driven, two-wheeled vehicle. It's a popular form of
                    transportation, recreation, and exercise that involves using
                    leg power to propel the bike forward. Biking can be done on
                    various types of terrain, including roads, trails, and
                    off-road paths, and it offers numerous physical and mental
                    health benefits, as well as environmental advantages.
                  </p>
                  <div className="">
                    <div className="discover-content ">
                      <div className="flex flex-row gap-2">
                        <FaAngleDoubleRight className="text-accent text-[1.5rem]" />
                        <h3 className="text-accent text-[1rem] ">
                          Improved Health:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 font-bold text-gray-500 text-[16px]">
                        <span className="text-accent hidden font-bold ">
                          Improved Health:
                        </span>{" "}
                        <span></span>
                        Cycling is an excellent low-impact exercise that can
                        help improve cardiovascular fitness, increase muscle
                        strength, and boost overall endurance. It's also great
                        for maintaining a healthy weight.
                      </p>
                    </div>
                    <div className="discover-content">
                      <div className="flex flex-row gap-2 md:items-center">
                        <FaAngleDoubleRight className="text-accent text-[1.5rem]" />
                        <h3 className="text-accent text-[1rem] ">
                          Cost-Effective Transportation:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 font-bold text-gray-500 text-[16px]">
                        <span className="text-accent hidden font-bold">
                          Cost-Effective Transportation:
                        </span>{" "}
                        <span></span>
                        Biking is an affordable way to get around, especially
                        compared to driving a car. It also helps save money on
                        parking fees, fuel costs, and vehicle maintenance.
                      </p>
                    </div>
                    <div className="discover-content">
                      <div className="flex flex-row gap-2 md:items-center">
                        <FaAngleDoubleRight className="text-accent text-[1.5rem]" />
                        <h3 className="text-accent text-[1rem] ">
                          Environmental Benefits:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 font-bold text-gray-500 text-[16px]">
                        <span className="text-accent hidden font-bold ">
                          Environmental Benefits:
                        </span>{" "}
                        <span></span>
                        Cycling is an eco-friendly mode of transportation that
                        doesn't produce air pollution or noise pollution. By
                        choosing to ride a bike instead of drive, you can reduce
                        your carbon footprint and contribute to a cleaner
                        environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" block overflow-hidden">
              <img
                src="/img/biking.webp"
                alt=""
                className=" object-cover"
              />
            </div>
          </div>
        </div>

        <div className="discover_wrapper">
          <div className=" block ">
            <img
              src="/img/pedal.webp"
              alt=""
              className=" object-cover "
            />
          </div>
          <div className="container">
            <div className=" ">
              <div className="dicover flex flex-col gap-4 py-7 ">
                <h2 className="text-[1.5rem] font-[montserrat-extrabold] leading-7 text-center">
                  About Pedal
                  <FaAngleDoubleUp className="text-accent hidden " />
                </h2>
                <p className="my-3">
                  Our bike shop is a family-owned business dedicated to
                  promoting sustainable transportation and fostering a love for
                  cycling in our community. We offer a wide range of
                  high-quality bikes, accessories, and gear to cater to riders
                  of all levels – from beginners to seasoned enthusiasts. Our
                  knowledgeable staff is always ready to assist you in finding
                  the perfect bike, ensuring a comfortable and enjoyable riding
                  experience. Additionally, we provide professional bike
                  servicing and maintenance to keep your ride running smoothly.
                  Join us in our mission to create a greener, healthier world
                  through the joy of cycling!
                </p>
              </div>
              <div></div>
              <div className="border-t-[2px] border-gray-400">
                <h3 className="text-[1rem] font-[montserrat-extrabold]">
                  Our Direct Line:
                </h3>
                <h2 className="text-accent text-[1.2rem]">
                  +63 987 654 3210
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileViewAbout;
