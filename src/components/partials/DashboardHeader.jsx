import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { LuPaintbrush2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <>
      <div className="container_dashboard shadow_wrapper fixed lg:min-w-[88rem] 3xl:max-w-[100rem] bg-dashSecondary z-50 py-3 rounded-t-md">
        <div className=" flex items-center justify-between">
          <h1 className="font-[inter24-regular]">Single Page Website</h1>
          <div className="flex items-center gap-4">
            <Link className="tooltip-desktop" data-tooltip="Desktop">
              <FaDesktop className="size-4 " />
            </Link>
            <Link className="tooltip-phone" data-tooltip="Phone">
              <FiSmartphone className="size-4 text-dashAccent hover:text-dark" />
            </Link>
            <Link className="tooltip-colors" data-tooltip="Colors">
              <LuPaintbrush2 className="size-4 text-dashAccent hover:text-dark" />
            </Link>
            <Link className="tooltip-website" data-tooltip="Go to Webpage">
              <BsBoxArrowUpRight className="size-4 text-dashAccent hover:text-dark" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
