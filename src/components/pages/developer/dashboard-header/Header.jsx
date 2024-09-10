import React from "react";
import DashboardBanner from "./DashboardBanner";
import ModalAddLogo from "./ModalAddLogo";
import Navigation from "../../../partials/Navigation";
import DashboardHeader from "../../../partials/DashboardHeader";
import { StoreContext } from "@/store/StoreContext";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";
import ModalAddNavigation from "./ModalAddNavigation";
import ModalAddBanner from "./ModalAddBanner";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isAdd, setIsAdd] = React.useState(false);
  const [isNav, setIsNav] = React.useState(false);
  const [isBanner, setIsBanner] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  return (
    <>
      <DashboardBanner setItemEdit={setItemEdit} setIsAdd={setIsAdd} setIsNav={setIsNav} setIsBanner={setIsBanner}/>
      {isAdd && <ModalAddLogo itemEdit={itemEdit} setIsAdd={setIsAdd} />}
      {isNav && <ModalAddNavigation itemEdit={itemEdit} setIsNav={setIsNav} />}
      {isBanner && <ModalAddBanner itemEdit={itemEdit} setIsBanner={setIsBanner} />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Header;
