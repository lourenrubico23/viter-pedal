import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdFileUpload } from "react-icons/md";
import ModalAddPedalLogo from "./ModalAddLogo";

const DashboardBanner = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    setIsAdd(true);
    setItemEdit(null);
    // document.body.classList.toggle("overflow-hidden");
    // console.log(document.body.classList.toggle("overflow-hidden"));
  };

  return (
    <>
      <section
        className="3xl:max-w-[100rem] 3xl:mx-auto 3xl:h-[900px]"
        id="header"
      >
        <div className="container_dashboard py-0 px-3 md:max-w-full md:max-h-full md:px-6 md:py-0 mx-auto relative bg-primary ">
          <div className="flex justify-between items-center  ">
            <div className="py-1 w-[115px] h-[37px] relative">
              <img src="/img/pedalLogo.png" alt="" className="object-cover" />
              <a
                className="absolute z-30 m-10 left-20 -top-8 cursor-pointer tooltip-action-table"
                data-tooltip="Upload"
                onClick={handleAdd}
              >
                <MdFileUpload className=" bg-accent rounded-full w-[25px] h-[25px] p-1 " />
              </a>
            </div>

            <nav>
              <ul className="nav relative">
                <a
                  className="absolute z-30 m-10 -left-16 -top-5 cursor-pointer tooltip-action-table"
                  data-tooltip="Upload"
                >
                  <MdFileUpload className=" bg-accent rounded-full w-[25px] h-[25px] p-1 " />
                </a>
                <li className="hover:text-accent cursor-pointer">Home</li>
                <li className="hover:text-accent cursor-pointer">Products</li>
                <li className="hover:text-accent cursor-pointer">Community</li>
                <li className="hover:text-accent cursor-pointer">Support</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="banner relative md:bg-[url('/img/Rectangle.webp')]">
          <div className=" container_dashboard flex h-full ">
            <div className="flex flex-col items-center md:items-start md:justify-center h-full md:gap-7 md:h-[815px] ">
              <h1 className="text-center md:text-left md:max-w-[calc(50% + 90px)] w-[50%] md:w-[50%] text-[clamp(1rem,5vw,3.5rem)] py-6 font-[montserrat-extralight]">
                The largest community of Bike enthusiasts
              </h1>
              <button className="btn-primary">Talk to Us</button>
            </div>
          </div>
          <a
            className="absolute z-30 m-10 top-8 cursor-pointer tooltip-action-table"
            data-tooltip="Upload"
          >
            <MdFileUpload className=" bg-accent rounded-full w-[25px] h-[25px] p-1 " />
          </a>
          <div className="md:hidden relative ">
            <div className="bg-gradient-to-b from-white to-transparent absolute h-[2rem] w-full"></div>
            <img
              src="/img/Rectangle.webp"
              alt=""
              className="w-full object-cover h-[25rem] "
            />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default DashboardBanner;
