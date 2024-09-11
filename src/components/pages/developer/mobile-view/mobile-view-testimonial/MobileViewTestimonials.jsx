import React from 'react'

const MobileViewTestimonials = () => {
  return (
    <>
    <div className="feedback_wrapper py-12" id='testimonials'>
        <div className="container">
          <div className="feedback-title flex flex-col items-center pb-5">
            <h2 className="text-[1.2rem] font-[montserrat-extralight]">
              You’re in good Shop
            </h2>
            <h3 className="text-center block">
              A Fun and Healthy Way to Connect with Your Community and the
              Environment
            </h3>
          </div>
          <div className="cards_wrapper flex flex-col">
            <div className="flex flex-col items-center gap-4 py-5">
              <div className="w-[6rem] h-[6rem]">
                <img
                  src="/img/feedback1.webp"
                  alt=""
                  className="object-contain object-top"
                />
              </div>

              <div className="content flex flex-col items-center gap-2">
                <h3 className="text-[1rem] font-[montserrat-extrabold]">
                  Jason Ramello
                </h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur. Neque risus augue eget
                  vel pellentesque amet diam amet ultricies. Sapien suspendisse
                  sollicitudin dignissim cursus. Ut ac morbi pretium eget porta
                  magna arcu sit nam. Quis arcu vitae id mi.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-5 ">
              <div className="w-[6rem] h-[6rem]">
                <img
                  src="/img/feedback2.webp"
                  alt=""
                  className="object-contain object-top"
                />
              </div>
              <div className="content flex flex-col items-center gap-2">
                <h3 className="text-[1rem] font-[montserrat-extrabold]">
                  Annalyn Jovellano
                </h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur. Neque risus augue eget
                  vel pellentesque amet diam amet ultricies. Sapien suspendisse
                  sollicitudin dignissim cursus. Ut ac morbi pretium eget porta
                  magna arcu sit nam. Quis arcu vitae id mi.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-5 ">
              <div className="w-[6rem] h-[6rem]">
                <img
                  src="/img/feedback3.webp"
                  alt=""
                  className="object-contain object-top"
                />
              </div>
              <div className="content flex flex-col items-center gap-2">
                <h3 className="text-[1rem] font-[montserrat-extrabold]">
                  Mark Anthony Bilog
                </h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur. Neque risus augue eget
                  vel pellentesque amet diam amet ultricies. Sapien suspendisse
                  sollicitudin dignissim cursus. Ut ac morbi pretium eget porta
                  magna arcu sit nam. Quis arcu vitae id mi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default MobileViewTestimonials
