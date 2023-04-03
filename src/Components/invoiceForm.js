import React from "react";
import { Formik } from "formik";
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
          paymentTerm: Yup.string().required("Required"),
        })}
      ></Formik>
    </>
  );
};

export default InvoiceForm;
