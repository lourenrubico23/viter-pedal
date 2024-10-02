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
  const [isAdd, setIsAdd] = React.useState(false);
  const [isNav, setIsNav] = React.useState(false);
  const [isBanner, setIsBanner] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState("");

  const {
    isFetching,
    error,
    data: headerData,
  } = useQueryData(
    "/v1/header", // endpoint
    "get", // method
    "header" // key
  );

  return (
    <>
      <DashboardBanner
        setItemEdit={setItemEdit}
        setIsAdd={setIsAdd}
        setIsNav={setIsNav}
        setIsBanner={setIsBanner}
        headerData={headerData}
        isFetching={isFetching}
      />

      {isAdd && (
        <ModalAddLogo
          itemEdit={itemEdit}
          setIsAdd={setIsAdd}
          headerData={headerData}
        />
      )}
      {isNav && (
        <ModalAddNavigation
          itemEdit={itemEdit}
          setIsNav={setIsNav}
          headerData={headerData}
        />
      )}
      {isBanner && (
        <ModalAddBanner
          itemEdit={itemEdit}
          setIsBanner={setIsBanner}
          headerData={headerData}
        />
      )}
    </>
  );
};

export default Header;
