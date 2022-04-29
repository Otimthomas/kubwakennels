import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    // Enter the intial values of the form here
    email: "",
    description: "",
  };

  // The validation Schema for the form goes below using Yup
  const validationSchema = Yup.object({
    // Enter the validation of each field below
    // for example -> email: Yup.string().required('Required');
    email: Yup.string().email().required("Required"),
    description: Yup.string().required("Required"),
  });

  // The onsubmit function has the values of the form
  const onSubmit = (values) => console.log("Form data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          {/* An input example */}
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          {/* A textarea example */}
          <FormikControl
            control="textarea"
            label="description"
            name="description"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
