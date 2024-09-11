import { setIsShow } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const MobileViewHeader = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
    document.body.classList.toggle("overflow-hidden");
    console.log(store.isShow);
  };
  return (
    <header className={store.isShow ? "" : "overflow-hidden"} id="header">
      <div className="container bg-primary relative">
        <div className="flex justify-between items-center">
          <div className="py-1 w-[90px] relative">
            <img src="/img/pedalLogo.png" alt="" className="object-cover" />
          </div>

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
              <li className="hover:text-accent cursor-pointer">Home</li>
              <li className="hover:text-accent cursor-pointer">Products</li>
              <li className="hover:text-accent cursor-pointer">Community</li>
              <li className="hover:text-accent cursor-pointer">Support</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className=" bg-none bg-primary ">
        <div className="container flex h-full ">
          <div className="banner_wrapper flex flex-col items-center h-full ">
            <h1 className="text-center text-[1rem] py-6 font-[montserrat-extralight]">
              The largest community of Bike enthusiasts
            </h1>
            <button className=" bg-accent rounded-md text-white px-5 py-2 font-bold font-[montserrat-light] transition-all text-[.8rem] hover:bg-buttonHover">
              Talk to Us
            </button>
          </div>
        </div>

        <div className="relative ">
          <div className="bg-gradient-to-b from-white to-transparent absolute h-[2rem] w-full"></div>
          <img
            src="/img/Rectangle.webp"
            alt=""
            className="w-full object-cover h-[25rem] "
          />
        </div>
      </div>
    </header>
  );
};

export default MobileViewHeader;
