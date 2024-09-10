import { InputText } from '@/components/helpers/FormInputs';
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

const ModalAddTestimonialTitle = ({itemEdit, setIsAdd}) => {
    const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

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
          ? `/v1/testimonial/${itemEdit.testimonial_aid}` // update
          : `/v1/testimonial`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["testimonial"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        setIsTitle(false);
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    testimonial_title: itemEdit ? itemEdit?.data[0].testimonial_title : "",
  };

  const yupSchema = Yup.object({
    
  });

  return (
    <ModalWrapper
    className={`transition-all ease-linear transform duration-200 ${animate}`}
    handleClose={handleClose}
  >
    <div className="modal-title">
      <h2 className="text-sm">
        {itemEdit ? "Edit" : "Add"} Testimonial Title
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
                    label="*Title"
                    type="text"
                    name="testimonial_title"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputText
                    label="*Sub-title"
                    type="text"
                    name="testimonial_sub_title"
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

export default ModalAddTestimonialTitle
