import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { setIsShow } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";

const MobileViewHeader = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
    document.body.classList.toggle("overflow-hidden");
    console.log(store.isShow);
  };

  const {
    isLoading,
    error,
    data: headerData,
  } = useQueryData(
    "/v1/header", // endpoint
    "get", // method
    "header" // key
  );

  return (
    <header className={store.isShow ? "" : "overflow-hidden"} id="header">
      <div>
        <div className="container bg-primary relative">
          <div className="flex justify-between items-center">
            {headerData?.data[0].header_logo_img === "" ? (
              <div className="py-1 w-[115px] h-[37px] relative bg-gray-300">
                <IoImageOutline className="text-[30px] mx-auto text-gray-500 " />
              </div>
            ) : (
              <div className="py-1 w-[90px] relative">
                <img
                  src={`${devBaseImgUrl}/${headerData?.data[0].header_logo_img}`}
                  alt=""
                  className="object-cover"
                />
              </div>
            )}

            <nav>
              <div className="toggle" onClick={handleShow}>
                <span></span>
                <span className="my-1"></span>
                <span></span>
              </div>
              <ul
                className={
                  store.isShow
                    ? "bg-primary absolute text-dark flex flex-col text-[16px] h-[100vh] p-4 text-center justify-center gap-8 font-bold left-0 w-full top-[2rem] z-50 duration-300"
                    : "bg-primary absolute text-dark flex flex-col text-[16px] h-[100vh] p-4 text-center justify-center gap-8 font-[montserrat-medium] font-bold transition-all"
                }
              >
                <li className="hover:text-accent cursor-pointer">
                  {headerData?.data[0].header_nav_a
                    ? headerData?.data[0].header_nav_a
                    : "navigation1"}
                </li>
                <li className="hover:text-accent cursor-pointer">
                  {headerData?.data[0].header_nav_b
                    ? headerData?.data[0].header_nav_b
                    : "navigation2"}
                </li>
                <li className="hover:text-accent cursor-pointer">
                  {headerData?.data[0].header_nav_c
                    ? headerData?.data[0].header_nav_c
                    : "navigation3"}
                </li>
                <li className="hover:text-accent cursor-pointer">
                  {headerData?.data[0].header_nav_d
                    ? headerData?.data[0].header_nav_d
                    : "navigation4"}
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className=" bg-none bg-primary ">
          <div className="container flex h-full ">
            <div className="banner_wrapper flex flex-col items-center h-full mx-auto ">
              <h1 className="text-center text-[1rem] py-6 font-[montserrat-extralight]">
                {headerData?.data[0].header_banner_text
                  ? headerData?.data[0].header_banner_text
                  : "Lorem ipsum dolor sit amet consectetur adipisicing."}
              </h1>
              <button className=" bg-accent rounded-md text-white px-5 py-2 font-bold font-[montserrat-light] transition-all text-[.8rem] hover:bg-buttonHover">
                {headerData?.data[0].header_button_text
                  ? headerData?.data[0].header_button_text
                  : "Button Text"}
              </button>
            </div>
          </div>

          <div className="relative ">
            <div className="bg-gradient-to-b from-white to-transparent absolute h-[2rem] w-full"></div>
            {headerData?.data[0].header_banner_img === "" ? (
              <div className="py-1 w-full h-[300px] relative bg-gray-300 flex items-center">
              <IoImageOutline className="text-[100px] mx-auto text-gray-500" />
            </div>
            ) : (
              <img
                src={`${devBaseImgUrl}/${headerData?.data[0].header_banner_img}`}
                alt=""
                className="w-full object-cover h-[25rem] "
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileViewHeader;
