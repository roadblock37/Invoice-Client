import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormSelectField, FormTextField } from "./FormComponents";


// form component to be used to create new invoice 
// and will be prepopulated with data when editing an invoice
const InvoiceForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          billAddress: "",
          billCity: "",
          billCountry: "",
          clientName: "",
          clientEmail: "",
          clientAddress: "",
          clientCity: "",
          clientPostal: "",
          clientCountry: "",
          description: "",
          invoiceDate: "",
          paymentTerm: "",
        }}
        validationSchema={Yup.object({
          billAddress: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          billCity: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          billCountry: Yup.string()
            .max(10, "Must be 10characters or less")
            .required("Required"),
          clientName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          clientEmail: Yup.string().email("Invalid Email").required("Required"),
          clientAddress: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          clientCity: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          clientPostal: Yup.number()
            .max(5, "Must be 5 characters or less")
            .required("Required"),
          clientCountry: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          description: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          invoiceDate: Yup.date().required("Required"),
          // TODO change to .oneOf so there are only 3 options
          paymentTerm: Yup.string().required("Required"),
        })}
      >
      <Form>
        <FormTextField
          label="Street Address"
          name="streetAddress"
          type="text"
          placeHolder="200 W Wacker"
        />
        <FormTextField
          label="City"
          name="city"
          type="text"
          placeHolder="chicago"
        />
        <FormTextField
          label="Post Code"
          name="postalCode"
          type="text"
          placeHolder="70291"
        />
        <FormTextField
          label="Country"
          name="country"
          type="text"
          placeHolder="USA"
        />
        <FormTextField
          label="Client's Name"
          name="clientName"
          type="text"
          placeHolder="John doe"
        />
        <FormTextField
          label="Client's Email"
          name="clientEmail"
          type="email"
          placeHolder="john@gmail.com"
        />
        <FormTextField
          label="Street Address"
          name="clientAddress"
          type="text"
          placeHolder="425 Fullerton Rd."
        />
        <FormTextField
          label="City"
          name="clientCity"
          type="text"
          placeHolder="Chicago"
        />
        <FormTextField
          label="Post Code"
          name="clientPostalCode"
          type="text"
          placeHolder="42156"
        />
        <FormTextField
          label="Country"
          name="clientCountry"
          type="text"
          placeHolder="USA"
        />
        
      </Form>
      </Formik>
    </>
  );
};

export default InvoiceForm;
