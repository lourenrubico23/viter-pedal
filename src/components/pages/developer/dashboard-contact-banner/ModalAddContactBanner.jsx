import useUploadPhoto from "@/components/custom-hooks/useUploadPhoto";
import { InputPhotoUpload, InputText } from "@/components/helpers/FormInputs";
import {
  apiVersion,
  devBaseImgUrl,
} from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";
import ButtonSpinner from "@/components/partials/spinner/ButtonSpinner";
import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import * as Yup from "yup";

const ModalAddContactBanner = ({ itemEdit, setIsAdd, contactBannerData }) => {
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
        `/v1/contactBanner/${contactBannerData?.data[0].contact_banner_aid}`, // update
        "put",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contactBanner"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
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
  console.log(contactBannerData);
  const initVal = {
    isUpdateContactBanner: itemEdit,
    contact_banner_img: contactBannerData
      ? contactBannerData?.data[0].contact_banner_img
      : "",
    contact_banner_title: contactBannerData
      ? contactBannerData?.data[0].contact_banner_title
      : "",
    contact_banner_button_text: contactBannerData
      ? contactBannerData?.data[0].contact_banner_button_text
      : "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">Edit Contact Banner</h2>
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
              contact_banner_img: photo
                ? photo.name
                : contactBannerData?.data[0].contact_banner_img,
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
                    <span className="top-20 px-2 text-dark">
                      Contact Banner Image
                    </span>
                    <div className="relative w-fit m-auto group">
                      {(contactBannerData === null && photo === null) ||
                      (photo === "" && contactBannerData === null) ? (
                        <div className="group-hover:opacity-20 bg-dashAccent mb-4 items-center gap-2 h-[180px] w-[350px] border rounded-md p-2 grid place-items-center">
                          <div className="">
                            <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                            <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                              Upload Image
                            </h1>
                          </div>
                        </div>
                      ) : (contactBannerData?.data[0].contact_banner_img ===
                          "" &&
                          photo === null) ||
                        photo === "" ? (
                        <div className="group-hover:opacity-20 mb-4 bg-dashAccent grid place-items-center items-center gap-2 h-[180px] w-[350px] p-2">
                          <div>
                            <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                            <h1 className="mb-0 leading-tight grid place-items-center text-gray text-[gray] text-[15px] text-center">
                              Upload Image
                            </h1>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={
                            photo
                              ? URL.createObjectURL(photo) // preview
                              : devBaseImgUrl +
                                "/" +
                                contactBannerData?.data[0].contact_banner_img // check db
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
                              handleChangePhoto(e, initVal.contact_banner_img)
                            }
                            className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="*Title"
                      type="text"
                      name="contact_banner_title"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="*Button Text"
                      type="text"
                      name="contact_banner_button_text"
                      disabled={mutation.isPending}
                    />
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
                        initVal.contact_banner_img === photo?.name
                      }
                    >
                      {mutation.isPending ? <ButtonSpinner /> : "Save"}
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

export default ModalAddContactBanner;
