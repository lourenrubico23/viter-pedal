import { StoreContext } from "@/store/StoreContext";
import React from "react";
import DashboardAbout from "./DashboardAbout";
import ModalAddImage1 from "./ModalAddAboutImage1";
import ModalAddAboutImage1 from "./ModalAddAboutImage1";
import ModalAddAboutTitle from "./ModalAddAboutTitle";
import ModalAddAboutContent from "./ModalAddAboutContent";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";
import ModalAddAboutDescription from "./ModalAddAboutDescription";
import ModalAddAboutImage2 from "./ModalAddAboutImage2";
import useQueryData from "@/components/custom-hooks/useQueryData";

const About = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [isTitle, setIsTitle] = React.useState(false);
  const [isContent, setIsContent] = React.useState(false);
  const [isDescription, setIsDescription] = React.useState(false);
  const [isImage2, setIsImage2] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const {
    isFetching,
    error,
    data: aboutData,
  } = useQueryData(
    "/v1/about", // endpoint
    "get", // method
    "about" // key
  );

  return (
    <>
      <DashboardAbout
        setItemEdit={setItemEdit}
        setIsAdd={setIsAdd}
        setIsTitle={setIsTitle}
        setIsContent={setIsContent}
        setIsDescription={setIsDescription}
        setIsImage2={setIsImage2}
        aboutData={aboutData}
        isFetching={isFetching}
      />
      {isAdd && (
        <ModalAddAboutImage1
          itemEdit={itemEdit}
          setIsAdd={setIsAdd}
          aboutData={aboutData}
        />
      )}
      {isTitle && (
        <ModalAddAboutTitle
          itemEdit={itemEdit}
          setIsTitle={setIsTitle}
          aboutData={aboutData}
        />
      )}
      {isContent && (
        <ModalAddAboutContent
          itemEdit={itemEdit}
          setIsContent={setIsContent}
          aboutData={aboutData}
        />
      )}
      {isDescription && (
        <ModalAddAboutDescription
          itemEdit={itemEdit}
          setIsDescription={setIsDescription}
          aboutData={aboutData}
        />
      )}
      {isImage2 && (
        <ModalAddAboutImage2
          itemEdit={itemEdit}
          setIsImage2={setIsImage2}
          aboutData={aboutData}
        />
      )}
      
    </>
  );
};

export default About;
