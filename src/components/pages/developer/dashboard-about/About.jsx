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

const About = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isAdd, setIsAdd] = React.useState(false);
  const [isTitle, setIsTitle] = React.useState(false);
  const [isContent, setIsContent] = React.useState(false);
  const [isDescription, setIsDescription] = React.useState(false);
  const [isImage2, setIsImage2] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  return (
    <>
      <DashboardAbout
        setItemEdit={setItemEdit}
        setIsAdd={setIsAdd}
        setIsTitle={setIsTitle}
        setIsContent={setIsContent}
        setIsDescription={setIsDescription}
        setIsImage2={setIsImage2}
      />
      {isAdd && <ModalAddAboutImage1 itemEdit={itemEdit} setIsAdd={setIsAdd} />}
      {isTitle && (
        <ModalAddAboutTitle itemEdit={itemEdit} setIsTitle={setIsTitle} />
      )}
      {isContent && (
        <ModalAddAboutContent itemEdit={itemEdit} setIsContent={setIsContent} />
      )}
      {isDescription && (
        <ModalAddAboutDescription itemEdit={itemEdit} setIsDescription={setIsDescription} />
      )}
      {isImage2 && (
        <ModalAddAboutImage2 itemEdit={itemEdit} setIsImage2={setIsImage2} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default About;
