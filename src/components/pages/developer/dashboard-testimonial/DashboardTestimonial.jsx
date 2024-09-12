import { HiPencil } from "react-icons/hi2";

const DashboardTestimonial = ({
  setItemEdit,
  setIsAdd,
  setIsFirst,
  setIsSecond,
  setIsThird,
}) => {
  const handleAddTitle = () => {
    setIsAdd(true);
    setItemEdit(null);
  };
  const handleAddFirst = () => {
    setIsFirst(true);
    setItemEdit(null);
  };
  const handleAddSecond = () => {
    setIsSecond(true);
    setItemEdit(null);
  };
  const handleAddThird = () => {
    setIsThird(true);
    setItemEdit(null);
  };
  return (
    <>
      {/* feedback */}
      <section id="testimonials">
        <div className="feedback_wrapper py-12 md:py-32 md:pb-28">
          <div className="container_dashboard">
            <div className="feedback-title flex flex-col items-center pb-5 md:pb-20 relative">
              <a
                className="absolute z-30 m-10 right-[330px] -top-9 cursor-pointer tooltip-header"
                data-tooltip="Edit Content"
                onClick={handleAddTitle}
              >
                <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-[5px] border-[1px] " />
              </a>
              <h2 className="text-[clamp(1rem,5vw,48px)] font-[montserrat-extralight]">
                You’re in good Shop
              </h2>
              <h3 className="text-center block md:hidden">
                A Fun and Healthy Way to Connect with Your Community and the
                Environment
              </h3>
            </div>
            <div className="cards_wrapper flex flex-col md:flex md:flex-row md:flex-wrap md:gap-4 lg:flex lg:flex-row lg:flex-nowrap lg:pt-4 lg:gap-[62px]">
              <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5 relative">
                <a
                  className="absolute z-30 m-10 left-[300px] -top-10 cursor-pointer tooltip-header"
                  data-tooltip="Edit Content"
                  onClick={handleAddFirst}
                >
                  <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-[5px] border-[1px] " />
                </a>
                <div className="w-[6rem] h-[6rem] lg:w-[30%] lg:h-[100%]">
                  <img
                    src="/img/feedback1.webp"
                    alt=""
                    className="object-contain object-top md:h-full md:w-full"
                  />
                </div>

                <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] relative">
                  <h3 className="text-[clamp(.6rem,4vw,16px)] font-[montserrat-extrabold] md:pb-4">
                    Jason Ramello
                  </h3>
                  <p className="md:font-bold">
                    Lorem ipsum dolor sit amet consectetur. Neque risus augue
                    eget vel pellentesque amet diam amet ultricies. Sapien
                    suspendisse sollicitudin dignissim cursus. Ut ac morbi
                    pretium eget porta magna arcu sit nam. Quis arcu vitae id
                    mi.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5 relative">
                <a
                  className="absolute z-30 m-10 left-[300px] -top-10 cursor-pointer tooltip-header"
                  data-tooltip="Edit Content"
                  onClick={handleAddSecond}
                >
                  <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-[5px] border-[1px] " />
                </a>
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
                    Lorem ipsum dolor sit amet consectetur. Neque risus augue
                    eget vel pellentesque amet diam amet ultricies. Sapien
                    suspendisse sollicitudin dignissim cursus. Ut ac morbi
                    pretium eget porta magna arcu sit nam. Quis arcu vitae id
                    mi.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5 relative">
                <a
                  className="absolute z-30 m-10 left-[300px] -top-10 cursor-pointer tooltip-header"
                  data-tooltip="Edit Content"
                  onClick={handleAddThird}
                >
                  <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-[5px] border-[1px] " />
                </a>
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
                    Lorem ipsum dolor sit amet consectetur. Neque risus augue
                    eget vel pellentesque amet diam amet ultricies. Sapien
                    suspendisse sollicitudin dignissim cursus. Ut ac morbi
                    pretium eget porta magna arcu sit nam. Quis arcu vitae id
                    mi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default DashboardTestimonial;
