import { StoreContext } from "@/store/StoreContext";
import React from "react";
import DashboardServices from "./DashboardServices";
import ModalAddServicesTitle from "./ModalAddServicesTitle";
import ModalAddServices1 from "./ModalAddServices1";
import ModalAddServices2 from "./ModalAddServices2";
import ModalAddServices3 from "./ModalAddServices3";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";

const Services = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isAdd, setIsAdd] = React.useState(false);
  const [isServices1, setIsServices1] = React.useState(false);
  const [isServices2, setIsServices2] = React.useState(false);
  const [isServices3, setIsServices3] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  return (
    <>
      <DashboardServices
        setItemEdit={setItemEdit}
        setIsAdd={setIsAdd}
        setIsServices1={setIsServices1}
        setIsServices2={setIsServices2}
        setIsServices3={setIsServices3}
      />
      {isAdd && (
        <ModalAddServicesTitle itemEdit={itemEdit} setIsAdd={setIsAdd} />
      )}
      {isServices1 && (
        <ModalAddServices1
          itemEdit={itemEdit}
          setIsServices1={setIsServices1}
        />
      )}
      {isServices2 && (
        <ModalAddServices2
          itemEdit={itemEdit}
          setIsServices2={setIsServices2}
        />
      )}
      {isServices3 && (
        <ModalAddServices3
          itemEdit={itemEdit}
          setIsServices3={setIsServices3}
        />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Services;
