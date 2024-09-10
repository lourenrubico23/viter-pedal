import React from "react";
import DashboardContactBanner from "./DashboardContactBanner";
import { StoreContext } from "@/store/StoreContext";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";
import ModalAddContactBanner from "./ModalAddContactBanner";

const ContactBanner = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isAdd, setIsAdd] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);
  
  return (
    <>
      <DashboardContactBanner setItemEdit={setItemEdit} setIsAdd={setIsAdd}/>
      {isAdd && <ModalAddContactBanner itemEdit={itemEdit} setIsAdd={setIsAdd}/>}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ContactBanner;
