import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <>
    {/* unleash */}
    <div className="bg-secondary py-16 md:py-[100px]">
        <div className="container">
          <div className="md:flex md:items-center lg:gap-[30rem]">
            <h2 className="text-[clamp(1.2rem,4vw,33px)] leading-7 text-center justify-center mx-auto lg:mx-0 lg:text-left w-[15rem] md:w-[36rem] font-[montserrat-medium] pb-6 text-gray-800 md:leading-[50px]">
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
            <h2 className="text-[clamp(1rem,5vw,48px)] font-[montserrat-extralight]">
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
                  src="/img/feedback1.webp"
                  alt=""
                  className="object-contain object-top md:h-full md:w-full"
                />
              </div>

              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%]">
                <h3 className="text-[clamp(.6rem,4vw,16px)] font-[montserrat-extrabold] md:pb-4">
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
                  src="/img/feedback2.webp"
                  alt=""
                  className="object-contain object-top lg:h-full lg:w-full"
                />
              </div>
              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%]">
                <h3 className="text-[clamp(.6rem,4vw,16px)] font-[montserrat-extrabold] md:pb-4">
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
                  src="/img/feedback3.webp"
                  alt=""
                  className="object-contain object-top lg:h-full lg:w-full"
                />
              </div>
              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%]">
                <h3 className="text-[clamp(.6rem,4vw,16px)] font-[montserrat-extrabold] md:pb-4">
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
    </>
  )
}

export default Testimonial
