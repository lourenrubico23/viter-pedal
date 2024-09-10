import React from "react";
import DashboardFooter from "./DashboardFooter";
import { StoreContext } from "@/store/StoreContext";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";
import ModalAddCopyRight from "./ModalAddCopyRight";

const Footer = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isAdd, setIsAdd] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  return (
    <>
      <DashboardFooter setItemEdit={setItemEdit} setIsAdd={setIsAdd} />
      {isAdd && <ModalAddCopyRight itemEdit={itemEdit} setIsAdd={setIsAdd}/>}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Footer;
