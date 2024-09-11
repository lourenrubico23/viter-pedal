import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import DashboardBanner from "./DashboardBanner";
import ModalAddBanner from "./ModalAddBanner";
import ModalAddLogo from "./ModalAddLogo";
import ModalAddNavigation from "./ModalAddNavigation";
import useQueryData from "@/components/custom-hooks/useQueryData";
import HeaderLoader from "./HeaderLoader";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isAdd, setIsAdd] = React.useState(false);
  const [isNav, setIsNav] = React.useState(false);
  const [isBanner, setIsBanner] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const {
    isLoading,
    error,
    data: header,
  } = useQueryData(
    "/v2/header", // endpoint
    "get", // method
    "header" // key
  );

  return (
    <>
      {/* {isLoading ? (
        <HeaderLoader />
      ) : ( */}
        <DashboardBanner
          setItemEdit={setItemEdit}
          setIsAdd={setIsAdd}
          setIsNav={setIsNav}
          setIsBanner={setIsBanner}
        />
      {/* )} */}

      {isAdd && <ModalAddLogo itemEdit={itemEdit} setIsAdd={setIsAdd} />}
      {isNav && <ModalAddNavigation itemEdit={itemEdit} setIsNav={setIsNav} />}
      {isBanner && (
        <ModalAddBanner itemEdit={itemEdit} setIsBanner={setIsBanner} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Header;
