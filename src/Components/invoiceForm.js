import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const InvoiceForm = () => {
  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: {
      billAddress: yup
        .string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      billCity: yup
        .string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      billCountry: yup
        .string()
        .max(10, "Must be 10characters or less")
        .required("Required"),
      clientName: yup
        .string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      clientEmail: yup.string().email("Invalid Email").required("Required"),
      clientAddress: yup
        .string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      clientCity: yup
        .string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      clientPostal: yup
        .number()
        .max(5, "Must be 5 characters or less")
        .required("Required"),
      clientCountry: yup
        .string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      description: yup
        .string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      invoiceDate: yup.date().required("Required"),
      paymentTerm: yup.string().required("Required"),
    },
  });
};

export default InvoiceForm;
