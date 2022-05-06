import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const ContactForm = () => {
  const initialValues = {
    // Enter the intial values of the form here
    name: "",
    email: "",
    message: "",
  };

  // The validation Schema for the form goes below using Yup
  const validationSchema = Yup.object({
    // Enter the validation of each field below
    // for example -> email: Yup.string().required('Required');
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email should be valid")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // The onsubmit function has the values of the form
  const onSubmit = (values) => console.log("Form data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          {/* An input example */}
          <FormikControl
            control="input"
            type="text"
            label="Your Name"
            name="name"
            autoFocus
          />
          <FormikControl
            control="input"
            type="email"
            label="Mail"
            name="email"
          />
          {/* A textarea example */}
          <FormikControl control="textarea" label="Message" name="message" />
          <button type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
