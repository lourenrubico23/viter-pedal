import React from "react";
import DashboardFooter from "./DashboardFooter";
import { StoreContext } from "@/store/StoreContext";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";
import ModalAddCopyRight from "./ModalAddCopyRight";
import useQueryData from "@/components/custom-hooks/useQueryData";

const Footer = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const {
    isFetchingFooter,
    errorFooter,
    data: footerData,
  } = useQueryData(
    "/v1/footer", // endpoint
    "get", // method
    "footer" // key
  );


  return (
    <>
      <DashboardFooter setItemEdit={setItemEdit} setIsAdd={setIsAdd} footerData={footerData}/>
      {isAdd && <ModalAddCopyRight itemEdit={itemEdit} setIsAdd={setIsAdd} footerData={footerData}/>}
      
    </>
  );
};

export default Footer;
