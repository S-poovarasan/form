import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function StuForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    course: "",
    terms: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "*Name must be at least 3 characters")
      .required("*Full Name is required"),

    email: Yup.string()
      .email("*Invalid Email Address")
      .required("*Email is required"),

    phone: Yup.string()
      .matches(/^\+?[0-9]{10,14}$/, "*Invalid Phone Number")
      .required("*Phone number is required"),

    password: Yup.string()
      .min(6, "*Your password must be at least 6 characters")
      .required("*Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "*Passwords do not match")
      .required("*Please confirm your password"),

    course: Yup.string().required("*Please select a course"),

    terms: Yup.boolean()
      .oneOf([true], "*Please agree to the terms and conditions")
      .required("*Please agree to the terms and conditions"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("Form submission successful 🎉");
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="form_container">
      <h2>Student Registration</h2>

      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Full Name</label>
            <Field type="text" name="name" autoComplete="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label>Email</label>
            <Field type="email" name="email" autoComplete="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label>Phone</label>
            <Field type="tel" name="phone" autoComplete="tel" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>

          <div>
            <label>Password</label>
            <Field type="password" name="password" autoComplete="new-password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <label>Confirm Password</label>
            <Field type="password" name="confirmPassword" autoComplete="new-password" />
            <ErrorMessage name="confirmPassword" component="div" className="error" />
          </div>

          <div>
            <label>Course</label>
            <Field as="select" name="course">
              <option value="">Select</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="MernStack">MernStack</option>
              <option value="DataScience">Data Science</option>
            </Field>
            <ErrorMessage name="course" component="div" className="error" />
          </div>

          <div>
            <label>
              <Field type="checkbox" name="terms" />
              I agree to the terms and conditions
            </label>
            <ErrorMessage name="terms" component="div" className="error" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default StuForm;
