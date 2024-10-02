import { StoreContext } from "@/store/StoreContext";
import React from "react";
import DashboardServices from "./DashboardServices";
import ModalAddServicesTitle from "./ModalAddServicesTitle";
import ModalAddServices1 from "./ModalAddServices1";
import ModalAddServices2 from "./ModalAddServices2";
import ModalAddServices3 from "./ModalAddServices3";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";
import useQueryData from "@/components/custom-hooks/useQueryData";

const Services = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [isServices1, setIsServices1] = React.useState(false);
  const [isServices2, setIsServices2] = React.useState(false);
  const [isServices3, setIsServices3] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState("");

  const {
    isFetching,
    error,
    data: servicesData,
  } = useQueryData(
    "/v1/services", // endpoint
    "get", // method
    "services" // key
  );

  return (
    <>
      <DashboardServices
        setItemEdit={setItemEdit}
        setIsAdd={setIsAdd}
        setIsServices1={setIsServices1}
        setIsServices2={setIsServices2}
        setIsServices3={setIsServices3}
        servicesData={servicesData}
      />
      {isAdd && (
        <ModalAddServicesTitle
          itemEdit={itemEdit}
          setIsAdd={setIsAdd}
          servicesData={servicesData}
        />
      )}
      {isServices1 && (
        <ModalAddServices1
          itemEdit={itemEdit}
          setIsServices1={setIsServices1}
          servicesData={servicesData}
        />
      )}
      {isServices2 && (
        <ModalAddServices2
          itemEdit={itemEdit}
          setIsServices2={setIsServices2}
          servicesData={servicesData}
        />
      )}
      {isServices3 && (
        <ModalAddServices3
          itemEdit={itemEdit}
          setIsServices3={setIsServices3}
          servicesData={servicesData}
        />
      )}
      
    </>
  );
};

export default Services;
