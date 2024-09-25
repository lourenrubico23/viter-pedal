import React from "react";
import DashboardTestimonial from "./DashboardTestimonial";
import { StoreContext } from "@/store/StoreContext";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";
import ModalAddTestimonialTitle from "./ModalAddTestimonialTitle";
import ModalAddFirstTestimonial from "./ModalAddFirstTestimonial";
import ModalAddSecondTestimonial from "./ModalAddSecondTestimonial";
import ModalAddThirdTestimonial from "./ModalAddThirdTestimonial";
import useQueryData from "@/components/custom-hooks/useQueryData";

const Testimonials = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isAdd, setIsAdd] = React.useState(false);
  const [isFirst, setIsFirst] = React.useState(false);
  const [isSecond, setIsSecond] = React.useState(false);
  const [isThird, setIsThird] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const {
    isFetching,
    error,
    data: testimonialData,
  } = useQueryData(
    "/v1/testimonial", // endpoint
    "get", // method
    "testimonial" // key
  );

  return (
    <>
      <DashboardTestimonial
        setItemEdit={setItemEdit}
        setIsAdd={setIsAdd}
        setIsFirst={setIsFirst}
        setIsSecond={setIsSecond}
        setIsThird={setIsThird}
        isFetching={isFetching}
        testimonialData={testimonialData}
      />
      {isAdd && (
        <ModalAddTestimonialTitle
          itemEdit={itemEdit}
          setIsAdd={setIsAdd}
          testimonialData={testimonialData}
        />
      )}
      {isFirst && (
        <ModalAddFirstTestimonial
          itemEdit={itemEdit}
          setIsFirst={setIsFirst}
          testimonialData={testimonialData}
        />
      )}
      {isSecond && (
        <ModalAddSecondTestimonial
          itemEdit={itemEdit}
          setIsSecond={setIsSecond}
          testimonialData={testimonialData}
        />
      )}
      {isThird && (
        <ModalAddThirdTestimonial
          itemEdit={itemEdit}
          setIsThird={setIsThird}
          testimonialData={testimonialData}
        />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Testimonials;
