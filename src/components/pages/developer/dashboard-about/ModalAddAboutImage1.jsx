import useUploadPhoto from '@/components/custom-hooks/useUploadPhoto';
import { InputPhotoUpload } from '@/components/helpers/FormInputs';
import { apiVersion } from '@/components/helpers/functions-general';
import { queryData } from '@/components/helpers/queryData';
import ModalWrapper from '@/components/partials/modals/ModalWrapper';
import ButtonSpinner from '@/components/partials/spinner/ButtonSpinner';
import { StoreContext } from '@/store/StoreContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import React from 'react'
import { GrFormClose } from 'react-icons/gr';
import { IoImageOutline } from 'react-icons/io5';
import { MdOutlineFileUpload } from 'react-icons/md';
import * as Yup from "yup";

const ModalAddAboutImage1 = ({itemEdit, setIsAdd}) => {
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
        itemEdit
          ? `/v1/about/${itemEdit.about_aid}` // update
          : `/v1/about`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["about"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        setIsAdd(false);
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    about_img_1: itemEdit ? itemEdit?.data[0].about_img_1 : "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} About Image</h2>
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
              header_img_1: photo?.name || itemEdit.header_img_1,
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
                    <span className="top-20 px-2 text-dark">About Image</span>
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
                      ) : (itemEdit?.header_img_1 === "" && photo === null) ||
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
                              ? URL.createObjectURl(photo) // preview
                              : devBaseImgUrl + "/" + itemEdit?.header_img_1 // check db
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
                              handleChangePhoto(e, initVal.header_img_1)
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
                        initVal.header_img_1 === photo?.name
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
  )
}

export default ModalAddAboutImage1
