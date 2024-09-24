import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";
import { FaAngleDoubleRight, FaAngleDoubleUp } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";

const MobileViewAbout = () => {
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
      <div>
        <div className="discover_wrapper" id="about">
          <div className="">
            <div className="container">
              <div className="">
                <div></div>
                <div className="dicover flex flex-col gap-4">
                  <h2 className="text-[1.5rem] font-[montserrat-extrabold] leading-7 text-center">
                    {aboutData?.data[0].about_title_a
                      ? aboutData?.data[0].about_title_a
                      : "Lorem ipsum dolor sit amet consectetur"}
                  </h2>
                  <p className="py-2 text-[16px]">
                    {aboutData?.data[0].about_description_a
                      ? aboutData?.data[0].about_description_a
                      : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto reprehenderit earum. Modi molestias vitae esse vero natus dolorem eius, at temporibus quia quas labore nemoearum? Labore nihil, illo veritatis excepturi odiosapiente dignissimos mollitia maiores, quia vero rerumnisi natus aperiam omnis repellat. Dolor laborummolestiae vero blanditiis."}
                  </p>
                  <div className="">
                    <div className="discover-content ">
                      <div className="flex flex-row gap-2">
                        <FaAngleDoubleRight className="text-accent text-[1.5rem]" />
                        <h3 className="text-accent text-[1rem] ">
                          {aboutData?.data[0].about_content_title_a
                            ? aboutData?.data[0].about_content_title_a
                            : "Lorem ipsum dolor sit amet:"}
                        </h3>
                      </div>
                      <p className="ml-6 my-4 font-bold text-gray-500 text-[16px]">
                        {aboutData?.data[0].about_content_description_a
                          ? aboutData?.data[0].about_content_description_a
                          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at asperiores, omnis quas sint, non recusandae voluptates accusamus quisquam sunt nostrum debitis. Id error quibusdam alias asperiores sint rem quae!"}
                      </p>
                    </div>
                    <div className="discover-content">
                      <div className="flex flex-row gap-2 md:items-center">
                        <FaAngleDoubleRight className="text-accent text-[1.5rem]" />
                        <h3 className="text-accent text-[1rem] ">
                          {aboutData?.data[0].about_content_title_b
                            ? aboutData?.data[0].about_content_title_b
                            : "Lorem ipsum dolor sit amet:"}
                        </h3>
                      </div>
                      <p className="ml-6 my-4 font-bold text-gray-500 text-[16px]">
                        {aboutData?.data[0].about_content_description_b
                          ? aboutData?.data[0].about_content_description_b
                          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at asperiores, omnis quas sint, non recusandae voluptates accusamus quisquam sunt nostrum debitis. Id error quibusdam alias asperiores sint rem quae!"}
                      </p>
                    </div>
                    <div className="discover-content">
                      <div className="flex flex-row gap-2 md:items-center">
                        <FaAngleDoubleRight className="text-accent text-[1.5rem]" />
                        <h3 className="text-accent text-[1rem] ">
                          {aboutData?.data[0].about_content_title_c
                            ? aboutData?.data[0].about_content_title_c
                            : "Lorem ipsum dolor sit amet:"}
                        </h3>
                      </div>
                      <p className="ml-6 my-4 font-bold text-gray-500 text-[16px]">
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
              <div className="image_wrapper w-full h-[20rem] bg-gray-300 place-content-center">
                <IoImageOutline className="text-[40px] mx-auto text-gray-500 " />
              </div>
            ) : (
              <div className=" block overflow-hidden">
                <img
                  src={`${devBaseImgUrl}/${aboutData?.data[0].about_img_a}`}
                  alt=""
                  className=" object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <div className="discover_wrapper">
          {aboutData?.data[0].about_img_b === "" ? (
            <div className="image_wrapper w-full h-[20rem] bg-gray-300 place-content-center">
              <IoImageOutline className="text-[40px] mx-auto text-gray-500 " />
            </div>
          ) : (
            <div className=" block ">
              <img
                src={`${devBaseImgUrl}/${aboutData?.data[0].about_img_b}`}
                alt=""
                className=" object-cover "
              />
            </div>
          )}

          <div className="container">
            <div className=" ">
              <div className="dicover flex flex-col gap-4 py-7 ">
                <h2 className="text-[1.5rem] font-[montserrat-extrabold] leading-7 text-center">
                  {aboutData?.data[0].about_title_b
                    ? aboutData?.data[0].about_title_b
                    : "Lorem ipsum dolor sit amet"}
                </h2>
                <p className="my-3">
                  {aboutData?.data[0].about_description_b
                    ? aboutData?.data[0].about_description_b
                    : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto reprehenderit earum. Modi molestias vitae esse vero natus dolorem eius, at temporibus quia quas labore nemoearum? Labore nihil, illo veritatis excepturi odiosapiente dignissimos mollitia maiores, quia vero rerumnisi natus aperiam omnis repellat. Dolor laborummolestiae vero blanditiis."}
                </p>
              </div>
              <div></div>
              <div className="border-t-[2px] border-gray-400">
                <h3 className="text-[1rem] font-[montserrat-extrabold]">
                  {aboutData?.data[0].about_contact_text
                    ? aboutData?.data[0].about_contact_text
                    : "Lorem ipsum dolor sit amet"}
                </h3>
                <h2 className="text-accent text-[1.2rem]">
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

export default MobileViewAbout;
