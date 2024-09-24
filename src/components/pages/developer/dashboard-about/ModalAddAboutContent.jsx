import { InputText, InputTextArea } from '@/components/helpers/FormInputs';
import { queryData } from '@/components/helpers/queryData';
import ModalWrapper from '@/components/partials/modals/ModalWrapper';
import ButtonSpinner from '@/components/partials/spinner/ButtonSpinner';
import { setError, setMessage, setSuccess } from '@/store/StoreAction';
import { StoreContext } from '@/store/StoreContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import React from 'react'
import { GrFormClose } from 'react-icons/gr';
import * as Yup from "yup";


const ModalAddAboutContent = ({itemEdit, setIsContent, aboutData}) => {
    const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
        setIsContent(false);
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v1/about/${aboutData?.data[0].about_aid}`, // update
        "put",
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
        setIsContent(false);
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully Updated.`));
      }
    },
  });


  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    isUpdateAbout: itemEdit,
    about_content_title_a: aboutData ? aboutData?.data[0].about_content_title_a : "",
    about_content_title_b: aboutData ? aboutData?.data[0].about_content_title_b : "",
    about_content_title_c: aboutData ? aboutData?.data[0].about_content_title_c : "",
    about_content_description_a: aboutData ? aboutData?.data[0].about_content_description_a : "",
    about_content_description_b: aboutData ? aboutData?.data[0].about_content_description_b : "",
    about_content_description_c: aboutData ? aboutData?.data[0].about_content_description_c : "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalWrapper
    className={`transition-all ease-linear transform duration-200 ${animate}`}
    handleClose={handleClose}
  >
    <div className="modal-title">
      <h2 className="text-sm">
        Edit About Contents
      </h2>
      <button onClick={handleClose}>
        <GrFormClose className="text-[25px]" />
      </button>
    </div>
    <div className="modal-content">
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          mutation.mutate(values);
        }}
      >
        {(props) => {
          return (
            <Form className="modal-form">
              <div className="form-input">
                <div className="input-wrapper">
                  <InputText
                    label="*First Content Title"
                    type="text"
                    name="about_content_title_a"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputTextArea
                    label="First Content Description"
                    type="text"
                    name="about_content_description_a"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputText
                    label="*Second Content Title"
                    type="text"
                    name="about_content_title_b"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputTextArea
                    label="Second Content Description"
                    type="text"
                    name="about_content_description_b"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputText
                    label="*Third Content Title"
                    type="text"
                    name="about_content_title_c"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputTextArea
                    label="Third Content Description"
                    type="text"
                    name="about_content_description_c"
                    disabled={mutation.isPending}
                  />
                </div>
              </div>
              <div className="form-action">
                <div className="form-btn">
                  <button
                    className="btn-modal-submit"
                    type="submit"
                    disabled={mutation.isPending || !props.dirty}
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
  )
}

export default ModalAddAboutContent
