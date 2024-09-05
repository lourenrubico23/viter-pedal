import React from "react";
import {
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaFacebookSquare,
} from "react-icons/fa";
import Header from "../../../partials/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="banner">
        <div className="container flex h-full shadow_image">
          <div className="banner_wrapper w-full flex flex-col items-center md:items-start md:justify-center h-full md:w-[27%] md:gap-7 md:h-[815px]">
            <h1 className="text-center md:text-left w-[13rem] md:w-full lg:w-[130%] text-[clamp(1.5rem,5vw,3.5rem)] md:leading-[50px] lg:leading-[80px] py-6 font-[montserrat-extralight]">
              The largest community of Bike enthusiasts
            </h1>
            <button className="btn-primary">Talk to Us</button>
          </div>
        </div>
        <div className="md:hidden">
          <img
            src="/img/Rectangle.png"
            alt=""
            className="mt-1 w-full z-[-1] object-cover h-[25rem]"
          />
        </div>
      </div>

      {/* choose your companion */}
      <div className="card_wrapper py-14 ">
        <div className="container lg:py-20">
          <div className="flex flex-col justify-center text-center pb-5 lg:text-left lg:pb-14">
            <h2 className="text-[clamp(1rem,6vw,2.5rem)] font-[montserrat-medium]">
              Choose your Companion
            </h2>
            <h3 className="pt-2 text-[clamp(.5rem,4vw,1.3rem)] line-clamp-2 font-[montserrat-extralight]">
              Escape the Ordinary: Experience the Thrill
            </h3>
          </div>

          <div className="cards_wrapper flex flex-col lg:flex lg:flex-row lg:gap-14 md:flex-row md:flex-wrap md:gap-5 md:mt-10">
            <div className="py-8 lg:py-0">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[26rem]">
                  <div className="image_wrapper md:w-[20rem] md:h-[10rem]">
                    <img
                      src="./img/bike1.png"
                      alt=""
                      className="object-contain md:h-full md:w-full"
                    />
                  </div>
                  <h3 className="text-[clamp(.7rem,4.7vw,1rem)] font-[montserrat-extrabold]">
                    Sed ut perspiciatis
                  </h3>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem.
                  </p>
                  <button className="btn-light">Talk to Us</button>
                </div>
              </div>
            </div>
            <div className="py-8 lg:py-0">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[26rem]">
                  <div className="image_wrapper md:w-[20rem] md:h-[10rem] ">
                    <img
                      src="./img/bike2.png"
                      alt=""
                      className="object-contain md:h-full md:w-full"
                    />
                  </div>

                  <h3 className="text-[clamp(.7rem,4.7vw,1rem)] font-[montserrat-extrabold]">
                    Lorem ipsum dolor
                  </h3>
                  <p>
                    Amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis.
                  </p>
                  <button className="btn-light">Talk to Us</button>
                </div>
              </div>
            </div>
            <div className="py-8 lg:py-0">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center lg:items-start md:w-[20rem] lg:w-[26rem]">
                  <div className="image_wrapper md:w-[20rem] md:h-[10rem]">
                    <img
                      src="./img/bike3.png"
                      alt=""
                      className="object-contain md:h-full md:w-full"
                    />
                  </div>
                  <h3 className="text-[clamp(.7rem,4.7vw,1rem)] font-[montserrat-extrabold]">
                    Nemo enim ipsam
                  </h3>
                  <p>
                    Consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor.
                  </p>
                  <button className="btn-light">Talk to Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* discover */}
      <div>
        <div className="discover_wrapper">
          <div className="lg:flex lg:flex-row-reverse lg:relative md:w-[100%] lg:h-[700px]">
            <div className="container">
              <div className="lg:grid lg:grid-cols-2">
                <div></div>
                <div className="dicover flex flex-col gap-4 lg:my-20 lg:ml-20">
                  <h2 className="text-[clamp(1rem,6vw,1.4rem)] font-[montserrat-extrabold] leading-7 text-center lg:text-left">
                    Discover the Beauty of Nature on Two Wheels
                  </h2>
                  <p className="py-2 md:font-bold md:leading-6">
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
                      <div className="flex flex-row gap-2 lg:items-center">
                        <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                        <h3 className="text-accent text-[clamp(.5rem,4vw,1rem)] lg:hidden">
                          Improved Health:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 lg:-my-9 lg:ml-16 lg:mb-10 font-bold text-gray-500">
                        <span className="text-accent hidden lg:inline-block font-bold">
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
                      <div className="flex flex-row gap-2 lg:items-center">
                        <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                        <h3 className="text-accent text-[clamp(.5rem,4vw,1rem)] lg:hidden">
                          Cost-Effective Transportation:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 lg:-my-9 lg:ml-16 lg:mb-10 font-bold text-gray-500">
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
                      <div className="flex flex-row gap-2 lg:items-center">
                        <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                        <h3 className="text-accent text-[clamp(.5rem,4vw,1rem)] lg:hidden">
                          Environmental Benefits:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 lg:-my-9 lg:ml-16 lg:pb-10 font-bold text-gray-500">
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
            <div className="lg:absolute lg:left-0 lg:top-0 h-full lg:w-[50%] block">
              <img
                src="/img/biking.png"
                alt=""
                className="lg:w-full lg:h-full object-cover md:w-full"
              />
            </div>
          </div>
        </div>

        <div className="discover_wrapper lg:flex lg:flex-row-reverse lg:relative md:w-[100%] lg:h-[700px]">
          <div className="lg:absolute lg:right-0 lg:top-0 h-full lg:w-[50%] block ">
            <img
              src="/img/pedal.png"
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
              <div className="border-t-[2px] border-gray-400">
                <h3 className="text-[clamp(.5rem,4vw,1rem)] py-1 lg:mt-10 lg:py-3 font-[montserrat-extrabold]">
                  Our Direct Line:
                </h3>
                <h2 className="text-accent text-[clamp(1.2rem,4vw,3rem)] md:pb-10">
                  +63 987 654 3210
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* unleash */}
      <div className="bg-secondary py-16 md:py-[100px]">
        <div className="container">
          <div className="md:flex md:items-center lg:gap-[30rem]">
            <h2 className="text-[clamp(1.2rem,4vw,2rem)] leading-7 text-center justify-center mx-auto lg:mx-0 lg:text-left w-[15rem] md:w-[35rem] font-[montserrat-medium] pb-6 text-gray-800 md:leading-[50px]">
              Unleash Your Adventurous Spirit: Ride a Bike and Explore the World
            </h2>
            <button className="btn-primary flex items-center gap-2 mx-auto">
              Join Our Community <FaFacebookSquare className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* feedback */}
      <div className="feedback_wrapper py-12 md:py-32 md:pb-28">
        <div className="container">
          <div className="feedback-title flex flex-col items-center pb-5 md:pb-20">
            <h2 className="text-[clamp(1rem,5vw,3rem)] font-[montserrat-extralight]">
              You’re in good Shop
            </h2>
            <h3 className="text-center block md:hidden">
              A Fun and Healthy Way to Connect with Your Community and the
              Environment
            </h3>
          </div>
          <div className="cards_wrapper flex flex-col md:flex md:flex-row md:flex-wrap md:gap-4 lg:flex lg:flex-row lg:flex-nowrap lg:pt-4 lg:gap-[62px]">
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] h-[6rem] lg:w-[30%] lg:h-[100%]">
                <img
                  src="/img/feedback1.png"
                  alt=""
                  className="object-contain object-top md:h-full md:w-full"
                />
              </div>

              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%]">
                <h3 className="text-[clamp(.6rem,4vw,1rem)] font-[montserrat-extrabold] md:pb-4">
                  Jason Ramello
                </h3>
                <p className="md:font-bold">
                  Lorem ipsum dolor sit amet consectetur. Neque risus augue eget
                  vel pellentesque amet diam amet ultricies. Sapien suspendisse
                  sollicitudin dignissim cursus. Ut ac morbi pretium eget porta
                  magna arcu sit nam. Quis arcu vitae id mi.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] h-[6rem] lg:w-[30%] lg:h-[100%]">
                <img
                  src="/img/feedback2.png"
                  alt=""
                  className="object-contain object-top lg:h-full lg:w-full"
                />
              </div>
              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%]">
                <h3 className="text-[clamp(.6rem,4vw,1rem)] font-[montserrat-extrabold] md:pb-4">
                  Annalyn Jovellano
                </h3>
                <p className="md:font-bold">
                  Lorem ipsum dolor sit amet consectetur. Neque risus augue eget
                  vel pellentesque amet diam amet ultricies. Sapien suspendisse
                  sollicitudin dignissim cursus. Ut ac morbi pretium eget porta
                  magna arcu sit nam. Quis arcu vitae id mi.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] h-[6rem] lg:w-[30%] lg:h-[100%]">
                <img
                  src="/img/feedback3.png"
                  alt=""
                  className="object-contain object-top lg:h-full lg:w-full"
                />
              </div>
              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%]">
                <h3 className="text-[clamp(.6rem,4vw,1rem)] font-[montserrat-extrabold] md:pb-4">
                  Mark Anthony Bilog
                </h3>
                <p className="md:font-bold">
                  Lorem ipsum dolor sit amet consectetur. Neque risus augue eget
                  vel pellentesque amet diam amet ultricies. Sapien suspendisse
                  sollicitudin dignissim cursus. Ut ac morbi pretium eget porta
                  magna arcu sit nam. Quis arcu vitae id mi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer_wrapper bg-secondary py-12 md:py-16">
        <div className="container">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="footer-nav text-center">
              <ul className="text-[clamp(.6rem,4vw,1rem)] font-[montserrat-extrabold] flex flex-col gap-2 lg:flex lg:flex-row lg:gap-24">
                <li className="hover:text-accent transition-all">Home</li>
                <li className="hover:text-accent transition-all">Products</li>
                <li className="hover:text-accent transition-all">Community</li>
                <li className="hover:text-accent transition-all">Support</li>
              </ul>
            </div>
            <div className="logo flex items-center gap-2 justify-center py-10 lg:order-first">
              <FaAngleDoubleUp className="text-accent size-6" />
              <h1 className="text-[clamp(1.5rem,4vw,1.8rem)] font-[comfortaa-semiBold]">
                Pedal
              </h1>
            </div>
            <h3 className="text-center text-[clamp(.5rem,4vw,.9rem)] text-gray-700">
              &copy; Pedal 2024. We love our Community!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
