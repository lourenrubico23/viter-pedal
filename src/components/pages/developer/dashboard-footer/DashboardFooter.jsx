import React from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'
import { MdFileUpload } from 'react-icons/md'

const DashboardFooter = () => {
  return (
    <>
    {/* footer */}
    <div className="bg-secondary py-12 md:py-16">
        <div className="container_dashboard">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="footer-nav text-center relative">
            <a
                className="absolute z-30 m-10 left-[530px] -top-16 cursor-pointer tooltip-action-table"
                data-tooltip="Upload"
              >
                <MdFileUpload className=" bg-accent rounded-full w-[25px] h-[25px] p-1 " />
              </a>
              <ul className="text-[clamp(.6rem,4vw,15px)] font-[montserrat-extrabold] flex flex-col gap-2 lg:flex lg:flex-row lg:gap-24">
                <li className="hover:text-accent transition-all cursor-pointer">
                  Home
                </li>
                <li className="hover:text-accent transition-all cursor-pointer">
                  Products
                </li>
                <li className="hover:text-accent transition-all cursor-pointer">
                  Community
                </li>
                <li className="hover:text-accent transition-all cursor-pointer">
                  Support
                </li>
              </ul>
            </div>
            <div className="logo flex items-center gap-2 justify-center py-10 lg:order-first">
            <div className="py-1 w-[115px] h-[37px] relative">
              <img src="/img/pedalLogo.png" alt="" className="object-cover" />
              <a
                className="absolute z-30 m-10 left-20 -top-16 cursor-pointer tooltip-action-table"
                data-tooltip="Upload"
              >
                <MdFileUpload className=" bg-accent rounded-full w-[25px] h-[25px] p-1 " />
              </a>
            </div>
            </div>
            <h3 className="text-center text-[clamp(.5rem,4vw,15px)] text-gray-700 relative">
            <a
                className="absolute z-30 m-10 -right-10 -top-16 cursor-pointer tooltip-action-table"
                data-tooltip="Upload"
              >
                <MdFileUpload className=" bg-accent text-black rounded-full w-[25px] h-[25px] p-1 " />
              </a>
              &copy; Pedal 2024. We love our Community!
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardFooter
