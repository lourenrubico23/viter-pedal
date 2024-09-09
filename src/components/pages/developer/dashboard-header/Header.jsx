import React from "react";
import DashboardBanner from "./DashboardBanner";
import ModalAddLogo from "./ModalAddLogo";
import Navigation from "../../../partials/Navigation";
import DashboardHeader from "../../../partials/DashboardHeader";

const Header = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  return (
    <>
      <Navigation />
      <div className="main-wrapper">
        <div className="fixed bg-dashPrimary py-3 w-[100%] z-50 "></div>
        <div className="wrapper wrapper_shadow">
          <DashboardHeader />
          <div className="md:pt-12 3xl:pt-12">
            <DashboardBanner setItemEdit={setItemEdit} />
          </div>
        </div>
      </div>

      {isAdd && <ModalAddLogo itemEdit={itemEdit} setIsAdd={setIsAdd} />}
    </>
  );
};

export default Header;
