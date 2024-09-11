import React from "react";

const MobileViewServices = () => {
  return (
    <>
      <div className="card_wrapper py-14 " id="services">
        <div className="container">
          <div className="flex flex-col justify-center text-center pb-5">
            <h2 className="text-[1.5rem] font-[montserrat-medium]">
              Choose your Companion
            </h2>
            <h3 className="pt-2 text-[1rem] line-clamp-2 font-[montserrat-extralight]">
              Escape the Ordinary: Experience the Thrill
            </h3>
          </div>

          <div className="cards_wrapper flex flex-col">
            <div className="py-8 ">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center ">
                  <div className="image_wrapper">
                    <img
                      src="./img/bike1.webp"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[1rem] font-[montserrat-extrabold]">
                    Sed ut perspiciatis
                  </h3>
                  <div className="md:min-h-[100px]">
                    <p className="text-[clamp(.7rem,4.7vw,16px)]">
                      Amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                  </div>
                  <button className="btn-light">Talk to Us</button>
                </div>
              </div>
            </div>
            <div className="py-8">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center">
                  <div className="image_wrapper ">
                    <img
                      src="./img/bike2.webp"
                      alt=""
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-[1rem] font-[montserrat-extrabold]">
                    Lorem ipsum dolor
                  </h3>
                  <div>
                    <p className="text-[1rem]">
                      Amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis.
                    </p>
                  </div>
                  <button className="btn-light">Talk to Us</button>
                </div>
              </div>
            </div>
            <div className="py-8 ">
              <div className="cards">
                <div className="cards-content flex flex-col gap-5 items-center justify-center">
                  <div className="image_wrapper ">
                    <img
                      src="./img/bike3.webp"
                      alt=""
                      className="object-contain "
                    />
                  </div>
                  <h3 className="text-[1rem] font-[montserrat-extrabold]">
                    Nemo enim ipsam
                  </h3>
                  <div>
                    <p className="text-[1rem]">
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
    </>
  );
};

export default MobileViewServices;
