import React from "react";
import ModalWrapper from "../../../partials/modals/ModalWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import { FaRegImage, FaUpload } from "react-icons/fa";
import { InputPhotoUpload } from "../../../helpers/FormInputs";
import useUploadPhoto from "../../../custom-hooks/useUploadPhoto";
import { StoreContext } from "../../../../store/StoreContext";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import ButtonSpinner from "../../../partials/spinner/ButtonSpinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import * as Yup from "yup";
import {
  apiVersion,
  devBaseImgUrl,
} from "@/components/helpers/functions-general";

const ModalAddLogo = ({ itemEdit, setIsAdd }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `${apiVersion}/upload-photo`,
    dispatch
  );

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      setIsAdd(false);
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v1/header/logo-img/${itemEdit.header_aid}`, // update
        "put",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["header"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      }
      if (data.success) {
        console.log("Success");
        setIsAdd(false);
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully Updated.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    header_logo_img: itemEdit ? itemEdit.header_logo_img : "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Logo</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            // to get all of the data of image
            const data = {
              ...values,
              header_logo_img: photo?.name || itemEdit.header_logo_img,
            };
            uploadPhoto(); // to save the photo when submit
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="mt-5">
                    <span className="top-20 px-2 text-dark">Header Logo</span>
                    <div className="relative w-fit m-auto group">
                      {itemEdit === null && photo === null ? (
                        <div className="group-hover:opacity-20 bg-dashAccent mb-4 items-center gap-2 h-[180px] w-[350px] border rounded-md p-2 grid place-items-center">
                          <div className="">
                            <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                            <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                              Upload Image
                            </h1>
                          </div>
                        </div>
                      ) : (itemEdit?.header_logo_img === "" &&
                          photo === null) ||
                        photo === "" ? (
                        <div className="group-hover:opacity-20 mb-4 bg-gray-700 grid place-items-center items-center gap-2 h-[180px] w-[350px] p-2">
                          <div>
                            <IoImageOutline className="text-[30px] text-gray" />
                            <h1 className="mb-0 leading-tight grid place-items-center text-gray text-[30px] text-center">
                              Upload Image
                            </h1>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={
                            photo
                              ? URL.createObjectURL(photo) // preview
                              : devBaseImgUrl + "/" + itemEdit?.header_logo_img // check db
                          }
                          alt="Logo"
                          className="group-hover:opacity-30 duration-200 relative h-[180px]  object-contain object-[50%,50%] m-auto"
                        />
                      )}

                      <div className="btnImgUpload">
                        <button>
                          <MdOutlineFileUpload />
                          <InputPhotoUpload
                            name="photo"
                            type="file"
                            id="myFile"
                            accept="image/*"
                            title="Upload Logo"
                            onChange={(e) =>
                              handleChangePhoto(e, initVal.header_logo_img)
                            }
                            className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={
                        ((mutation.isPending || !props.dirty) &&
                          photo === null) ||
                        photo === "" ||
                        initVal.header_logo_img === photo?.name
                      }
                    >
                      {mutation.isPending ? (
                        <ButtonSpinner />
                      ) : itemEdit ? (
                        "Save"
                      ) : (
                        "Add"
                      )}
                    </button>
                    <button
                      className="btn-modal-cancel"
                      type="button"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddLogo;
