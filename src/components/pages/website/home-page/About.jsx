import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";
import { FaAngleDoubleRight, FaAngleDoubleUp } from "react-icons/fa";

const About = () => {
  const {
    isFetching,
    error,
    data: aboutData,
  } = useQueryData(
    "/v1/about", // endpoint
    "get", // method
    "about" // key
  );

  return (
    <>
      {/* discover */}
      <div>
        <div className="discover_wrapper" id="about">
          <div className="lg:flex lg:flex-row-reverse lg:relative md:w-[100%] ">
            <div className="container">
              <div className="lg:grid lg:grid-cols-2">
                <div></div>
                <div className="dicover flex flex-col gap-4 lg:my-20 lg:ml-20">
                  <h2 className="text-[clamp(1rem,6vw,24px)] font-[montserrat-extrabold] leading-7 text-center lg:text-left">
                    {aboutData?.data[0].about_title_a
                      ? aboutData?.data[0].about_title_a
                      : "Lorem ipsum dolor sit amet consectetur"}
                  </h2>
                  <p className="py-2 md:font-bold md:leading-6 text-[clamp(6vw,16px)]">
                    {aboutData?.data[0].about_description_a
                      ? aboutData?.data[0].about_description_a
                      : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto reprehenderit earum. Modi molestias vitae esse vero natus dolorem eius, at temporibus quia quas labore nemoearum? Labore nihil, illo veritatis excepturi odiosapiente dignissimos mollitia maiores, quia vero rerumnisi natus aperiam omnis repellat. Dolor laborummolestiae vero blanditiis."}
                  </p>
                  <div className="md:my-5">
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
            <div className="lg:absolute lg:left-0 lg:top-0 h-full lg:w-[50%] block overflow-hidden">
              <img
                src={`${devBaseImgUrl}/${aboutData?.data[0].about_img_a}`}
                alt=""
                className="lg:w-full lg:h-full object-cover md:w-full"
              />
            </div>
          </div>
        </div>

        <div className="discover_wrapper lg:flex lg:flex-row-reverse lg:relative md:w-[100%]">
          <div className="lg:absolute lg:right-0 lg:top-0 h-full lg:w-[50%] block ">
            <img
              src={`${devBaseImgUrl}/${aboutData?.data[0].about_img_b}`}
              alt=""
              className="lg:w-full lg:h-full object-cover md:w-full"
            />
          </div>
          <div className="container">
            <div className="lg:grid lg:grid-cols-2 lg:mr-20 lg:pr-10 ">
              <div className="dicover flex flex-col gap-4 py-7 lg:gap-0 md:my-6">
                <h2 className="text-[clamp(1rem,6vw,1.5rem)] font-[montserrat-extrabold] leading-7 text-center lg:text-left lg:flex lg:items-center lg:gap-3 lg:py-10">
                {aboutData?.data[0].about_title_b
                        ? aboutData?.data[0].about_title_b
                        : "Lorem ipsum dolor sit amet"}
                  <FaAngleDoubleUp className="text-accent hidden lg:block" />
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
    </>
  );
};

export default About;
