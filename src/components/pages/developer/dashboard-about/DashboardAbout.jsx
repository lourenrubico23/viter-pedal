import {
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaRegImages,
} from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import AboutLoader from "./AboutLoader";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { IoImageOutline } from "react-icons/io5";

const DashboardAbout = ({
  setItemEdit,
  setIsAdd,
  setIsTitle,
  setIsContent,
  setIsDescription,
  setIsImage2,
  aboutData,
  isFetching,
}) => {
  const handleAddImage1 = () => {
    setIsAdd(true);
    setItemEdit("imageAUpdate");
  };
  const handleAddTitle1 = () => {
    setIsTitle(true);
    setItemEdit("titleAndDescriptionAUpdate");
  };
  const handleAddContents = () => {
    setIsContent(true);
    setItemEdit("contentsUpdate");
  };
  const handleAddAboutDescription = () => {
    setIsDescription(true);
    setItemEdit("titleAndDescriptionBUpdate");
  };
  const handleAddAboutImage2 = () => {
    setIsImage2(true);
    setItemEdit("imageBUpdate");
  };

  return (
    <>
      <section id="about" className="bg-primary">
        {isFetching ? (
          <AboutLoader />
        ) : (
          <div>
            <div className="discover_wrapper">
              <div className="lg:flex lg:flex-row-reverse lg:relative">
                <div className="container_dashboard">
                  <div className="lg:grid lg:grid-cols-2">
                    <div></div>
                    <div className="dicover flex flex-col gap-4 lg:my-20 lg:ml-12 relative">
                      <h2 className="flex flex-row text-[clamp(1rem,6vw,24px)] font-[montserrat-extrabold] leading-7 text-center lg:text-left">
                        {aboutData?.data[0].about_title_a
                          ? aboutData?.data[0].about_title_a
                          : "Lorem ipsum dolor sit amet consectetur"}
                        <a
                          className="relative cursor-pointer tooltip-header"
                          data-tooltip="Edit Content"
                          onClick={handleAddTitle1}
                        >
                          <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                        </a>
                      </h2>
                      <p className="py-2 md:font-bold md:leading-6 text-[clamp(6vw,16px)]">
                        {aboutData?.data[0].about_description_a
                          ? aboutData?.data[0].about_description_a
                          : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto reprehenderit earum. Modi molestias vitae esse vero natus dolorem eius, at temporibus quia quas labore nemoearum? Labore nihil, illo veritatis excepturi odiosapiente dignissimos mollitia maiores, quia vero rerumnisi natus aperiam omnis repellat. Dolor laborummolestiae vero blanditiis."}
                      </p>
                      <div className="md:my-5 relative">
                        <a
                          className="absolute m-10 right-[4px] -top-14 cursor-pointer tooltip-header"
                          data-tooltip="Edit Content"
                          onClick={handleAddContents}
                        >
                          <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                        </a>
                        <div className="discover-content lg:mt-5">
                          <div className="flex flex-row gap-2 md:items-center">
                            <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                            <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                              {aboutData?.data[0].about_content_title_a
                                ? aboutData?.data[0].about_content_title_a
                                : "Lorem ipsum dolor sit amet:"}
                            </h3>
                          </div>
                          <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:mb-10 font-bold text-gray-500 text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                            <span className="text-accent hidden lg:inline-block font-bold ">
                              {aboutData?.data[0].about_content_title_a
                                ? aboutData?.data[0].about_content_title_a
                                : "Lorem ipsum dolor sit amet:"}
                            </span>{" "}
                            <span></span>
                            {aboutData?.data[0].about_content_description_a
                              ? aboutData?.data[0].about_content_description_a
                              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at asperiores, omnis quas sint, non recusandae voluptates accusamus quisquam sunt nostrum debitis. Id error quibusdam alias asperiores sint rem quae!"}
                          </p>
                        </div>
                        <div className="discover-content">
                          <div className="flex flex-row gap-2 md:items-center">
                            <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                            <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                              {aboutData?.data[0].about_content_title_b
                                ? aboutData?.data[0].about_content_title_b
                                : "Lorem ipsum dolor sit amet:"}
                            </h3>
                          </div>
                          <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:mb-10 font-bold text-gray-500 text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                            <span className="text-accent hidden lg:inline-block font-bold">
                              {aboutData?.data[0].about_content_title_b
                                ? aboutData?.data[0].about_content_title_b
                                : "Lorem ipsum dolor sit amet:"}
                            </span>{" "}
                            <span></span>
                            {aboutData?.data[0].about_content_description_b
                              ? aboutData?.data[0].about_content_description_b
                              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at asperiores, omnis quas sint, non recusandae voluptates accusamus quisquam sunt nostrum debitis. Id error quibusdam alias asperiores sint rem quae!"}
                          </p>
                        </div>
                        <div className="discover-content">
                          <div className="flex flex-row gap-2 md:items-center">
                            <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                            <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                              {aboutData?.data[0].about_content_title_c
                                ? aboutData?.data[0].about_content_title_c
                                : "Lorem ipsum dolor sit amet:"}
                            </h3>
                          </div>
                          <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:pb-10 font-bold text-gray-500 text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                            <span className="text-accent hidden lg:inline-block font-bold">
                              {aboutData?.data[0].about_content_title_c
                                ? aboutData?.data[0].about_content_title_c
                                : "Lorem ipsum dolor sit amet:"}
                            </span>{" "}
                            <span></span>
                            {aboutData?.data[0].about_content_description_c
                              ? aboutData?.data[0].about_content_description_c
                              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at asperiores, omnis quas sint, non recusandae voluptates accusamus quisquam sunt nostrum debitis. Id error quibusdam alias asperiores sint rem quae!"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {aboutData?.data[0].about_img_a === "" ? (
                  <div className="h-full w-full relative">
                    <a
                      className="absolute m-10 right-[30px] cursor-pointer tooltip-header-nav"
                      data-tooltip="Upload Image"
                      onClick={handleAddImage1}
                    >
                      <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px] text-black" />
                    </a>
                    <div className=" h-full block">
                      <div className="image_wrapper h-[635px] bg-gray-300 place-content-center">
                        <IoImageOutline className="text-[200px] mx-auto text-gray-500" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="">
                    <div className="absolute lg:left-0 lg:top-0 h-full lg:w-[50%] block overflow-hidden">
                      <img
                        src={`${devBaseImgUrl}/${aboutData?.data[0].about_img_a}`}
                        alt=""
                        className="lg:w-full lg:h-full object-cover md:w-full"
                      />
                    </div>
                    <a
                      className="absolute m-10 left-[600px] -top-2 cursor-pointer tooltip-header"
                      data-tooltip="Upload Image"
                      onClick={handleAddImage1}
                    >
                      <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px] text-black" />
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="discover_wrapper lg:flex lg:flex-row-reverse lg:relative">
              {aboutData?.data[0].about_img_b === "" ? (
                <div className="h-full w-full relative">
                  <a
                    className="absolute m-10 right-[30px] cursor-pointer tooltip-header-nav"
                    data-tooltip="Upload Image"
                    onClick={handleAddAboutImage2}
                  >
                    <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px] text-black" />
                  </a>
                  <div className=" h-full block">
                    <div className="image_wrapper max-w-full min-h-[35rem] bg-gray-300 place-content-center">
                      <IoImageOutline className="text-[200px] mx-auto text-gray-500" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" h-full w-[50%] relative lg:absolute lg:right-0 lg:top-0 lg:w-[50%] block">
                  <a
                    className="absolute m-10 right-[30px] cursor-pointer tooltip-header-nav"
                    data-tooltip="Upload Image"
                    onClick={handleAddAboutImage2}
                  >
                    <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px] text-black" />
                  </a>
                  <img
                    src={`${devBaseImgUrl}/${aboutData?.data[0].about_img_b}`}
                    alt=""
                    className="lg:w-full lg:h-full object-cover md:w-full"
                  />
                </div>
              )}

              <div className="container_dashboard">
                <div className="w-full lg:grid lg:grid-cols-2 lg:mr-20 lg:pr-10">
                  <div className="dicover flex flex-col gap-4 py-7 lg:gap-0 md:my-6">
                    <h2 className="text-[clamp(1rem,6vw,1.5rem)] font-[montserrat-extrabold] leading-7 text-center lg:text-left lg:flex lg:items-center lg:gap-3 lg:py-10">
                      {aboutData?.data[0].about_title_b
                        ? aboutData?.data[0].about_title_b
                        : "Lorem ipsum dolor sit amet"}
                      <FaAngleDoubleUp className="text-accent hidden lg:block" />
                      <a
                        className="relative cursor-pointer tooltip-header"
                        data-tooltip="Edit Content"
                        onClick={handleAddAboutDescription}
                      >
                        <HiPencil className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                      </a>
                    </h2>

                    <p className="my-3 lg:my-5 lg:text-lg">
                      {aboutData?.data[0].about_description_b
                        ? aboutData?.data[0].about_description_b
                        : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto reprehenderit earum. Modi molestias vitae esse vero natus dolorem eius, at temporibus quia quas labore nemoearum? Labore nihil, illo veritatis excepturi odiosapiente dignissimos mollitia maiores, quia vero rerumnisi natus aperiam omnis repellat. Dolor laborummolestiae vero blanditiis."}
                    </p>
                  </div>
                  <div></div>
                  <div className="border-t-[2px] border-gray-400 md:mb-8 mb-4">
                    <h3 className="text-[clamp(.5rem,4vw,18px)] py-1 lg:mt-10 lg:py-3 font-[montserrat-extrabold]">
                      {aboutData?.data[0].about_contact_text
                        ? aboutData?.data[0].about_contact_text
                        : "Lorem ipsum dolor sit amet"}
                    </h3>
                    <h2 className="text-accent text-[clamp(1.2rem,4vw,48px)]">
                      {aboutData?.data[0].about_contact_number
                        ? aboutData?.data[0].about_contact_number
                        : "+000000000"}
                    </h2>
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

export default DashboardAbout;
