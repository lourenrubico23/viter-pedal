import React from "react";
import DashboardContactBanner from "./DashboardContactBanner";
import { StoreContext } from "@/store/StoreContext";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";
import ModalAddContactBanner from "./ModalAddContactBanner";
import useQueryData from "@/components/custom-hooks/useQueryData";

const ContactBanner = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isAdd, setIsAdd] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const {
    isFetching,
    error,
    data: contactBannerData,
  } = useQueryData(
    "/v1/contactBanner", // endpoint
    "get", // method
    "contactBanner" // key
  );

  return (
    <>
      <DashboardContactBanner
        setItemEdit={setItemEdit}
        setIsAdd={setIsAdd}
        isFetching={isFetching}
        contactBannerData={contactBannerData}
      />
      {isAdd && (
        <ModalAddContactBanner
          itemEdit={itemEdit}
          setIsAdd={setIsAdd}
          contactBannerData={contactBannerData}
        />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ContactBanner;
