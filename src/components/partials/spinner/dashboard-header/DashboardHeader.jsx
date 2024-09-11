import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { LuPaintbrush2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../helpers/functions-general";
import React from "react";
import { StoreContext } from "@/store/StoreContext";
import ModalChangeColor from "./ModalChangeColor";
import ModalSuccess from "../../modals/ModalSuccess";
import ModalError from "../../modals/ModalError";

const DashboardHeader = ({ menu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isAdd, setIsAdd] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleChangeColor = () => {
    setIsAdd(true);
    setItemEdit(null);
  };

  return (
    <>
      <div className="container_dashboard shadow_wrapper fixed lg:min-w-[88rem] 3xl:max-w-[100rem] bg-dashSecondary z-50 py-3 rounded-t-md">
        <div className=" flex items-center justify-between">
          <h1 className="font-[inter24-regular]">Single Page Website</h1>
          <div>
            <ul className="header-nav flex items-center gap-4">
              <li
                className={`hover:text-dark ${
                  menu === "dashboard"
                    ? "text-dark"
                    : "text-dashAccent hover:text-dark"
                }`}
              >
                <Link
                  to={`${devNavUrl}/dashboard`}
                  className="tooltip-desktop"
                  data-tooltip="Desktop"
                >
                  <FaDesktop className="size-4 " />
                </Link>
              </li>
              <li
                className={`hover:text-dark ${
                  menu === "mobile-view"
                    ? "text-dark"
                    : "text-dashAccent hover:text-dark"
                }`}
              >
                <Link
                  to={`${devNavUrl}/mobile-view`}
                  className="tooltip-phone"
                  data-tooltip="Mobile"
                >
                  <FiSmartphone className="size-4" />
                </Link>
              </li>
              <li
                className={`hover:text-dark ${
                  menu === "colors"
                    ? "text-dark"
                    : "text-dashAccent hover:text-dark"
                }`} 
              >
                <Link
                  className="tooltip-colors"
                  data-tooltip="Color Palette"onClick={handleChangeColor}
                >
                  <LuPaintbrush2 className="size-4 text-dashAccent hover:text-dark" />
                </Link>
              </li>
              <li
                className={`hover:text-dark ${
                  menu === "webpage"
                    ? "text-dark"
                    : "text-dashAccent hover:text-dark"
                }`}
              >
                <Link
                  to={`${devNavUrl}/home`}
                  className="tooltip-website"
                  data-tooltip="Go to Webpage"
                >
                  <BsBoxArrowUpRight className="size-4 text-dashAccent hover:text-dark" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isAdd && <ModalChangeColor itemEdit={itemEdit} setIsAdd={setIsAdd}/>}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default DashboardHeader;
