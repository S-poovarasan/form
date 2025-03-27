import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function EmployeeFeedbackForm() {
  const initialValues = {
    fullname: "",
    email: "",
    department: "",
    rating: "",
    feedback: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    alert("Form submission successful");
    console.log("Form Data:", values);
    resetForm();
  };

  const validationSchema = Yup.object({
    fullname: Yup.string()
      .min(3, "*Name must be at least 3 characters")
      .required("*Full name is required"),

    email: Yup.string()
      .email("*Invalid email format")
      .required("*Email is required"),

    department: Yup.string().required("*Department is required"),

    rating: Yup.number()
      .integer("*Rating must be a whole number")
      .min(1, "*Minimum rating is 1")
      .max(5, "*Maximum rating is 5")
      .required("*Rating is required"),

    feedback: Yup.string().max(200, "Feedback should be under 200 characters"),
  });

  return (
    <div className="form_container">
      <h2>Employee Feedback Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>Full Name</label>
              <Field type="text" name="fullname" />
              <ErrorMessage name="fullname" component="div" className="error" />
            </div>

            <div>
              <label>Email</label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label>Department</label>
              <Field type="text" name="department" />
              <ErrorMessage name="department" component="div" className="error" />
            </div>

            <div>
              <label>Rating</label>
              <Field type="number" name="rating" />
              <ErrorMessage name="rating" component="div" className="error" />
            </div>

            <div>
              <label>Feedback</label>
              <Field as="textarea" name="feedback" />
              <ErrorMessage name="feedback" component="div" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EmployeeFeedbackForm;
