import React from 'react'
import { FaAngleDoubleRight, FaAngleDoubleUp } from 'react-icons/fa'

const About = () => {
  return (
    <>
    {/* discover */}
    <div>
        <div className="discover_wrapper">
          <div className="lg:flex lg:flex-row-reverse lg:relative md:w-[100%] ">
            <div className="container">
              <div className="lg:grid lg:grid-cols-2">
                <div></div>
                <div className="dicover flex flex-col gap-4 lg:my-20 lg:ml-20">
                  <h2 className="text-[clamp(1rem,6vw,24px)] font-[montserrat-extrabold] leading-7 text-center lg:text-left">
                    Discover the Beauty of Nature on Two Wheels
                  </h2>
                  <p className="py-2 md:font-bold md:leading-6 text-[clamp(6vw,16px)]">
                    Biking refers to the activity of riding a bicycle, which is
                    a pedal-driven, two-wheeled vehicle. It's a popular form of
                    transportation, recreation, and exercise that involves using
                    leg power to propel the bike forward. Biking can be done on
                    various types of terrain, including roads, trails, and
                    off-road paths, and it offers numerous physical and mental
                    health benefits, as well as environmental advantages.
                  </p>
                  <div className="md:my-5">
                    <div className="discover-content lg:mt-5">
                      <div className="flex flex-row gap-2 md:items-center">
                        <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                        <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                          Improved Health:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:mb-10 font-bold text-gray-500 text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                        <span className="text-accent hidden lg:inline-block font-bold ">
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
                        <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                        <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                          Cost-Effective Transportation:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:mb-10 font-bold text-gray-500 text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                        <span className="text-accent hidden lg:inline-block font-bold">
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
                        <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                        <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                          Environmental Benefits:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:pb-10 font-bold text-gray-500 text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                        <span className="text-accent hidden lg:inline-block font-bold">
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
            <div className="lg:absolute lg:left-0 lg:top-0 h-full lg:w-[50%] block overflow-hidden">
              <img
                src="/img/biking.webp"
                alt=""
                className="lg:w-full lg:h-full object-cover md:w-full"
              />
            </div>
          </div>
        </div>

        <div className="discover_wrapper lg:flex lg:flex-row-reverse lg:relative md:w-[100%]">
          <div className="lg:absolute lg:right-0 lg:top-0 h-full lg:w-[50%] block ">
            <img
              src="/img/pedal.webp"
              alt=""
              className="lg:w-full lg:h-full object-cover md:w-full"
            />
          </div>
          <div className="container">
            <div className="lg:grid lg:grid-cols-2 lg:mr-20 lg:pr-10 ">
              <div className="dicover flex flex-col gap-4 py-7 lg:gap-0 md:my-6">
                <h2 className="text-[clamp(1rem,6vw,1.5rem)] font-[montserrat-extrabold] leading-7 text-center lg:text-left lg:flex lg:items-center lg:gap-3 lg:py-10">
                  About Pedal
                  <FaAngleDoubleUp className="text-accent hidden lg:block" />
                </h2>
                <p className="my-3 lg:my-5 lg:text-lg">
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
              <div className="border-t-[2px] border-gray-400 md:mb-8 mb-4">
                <h3 className="text-[clamp(.5rem,4vw,18px)] py-1 lg:mt-10 lg:py-3 font-[montserrat-extrabold]">
                  Our Direct Line:
                </h3>
                <h2 className="text-accent text-[clamp(1.2rem,4vw,48px)]">
                  +63 987 654 3210
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
