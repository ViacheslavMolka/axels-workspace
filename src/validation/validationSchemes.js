import * as Yup from "yup";

export const ShippingSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("1"),

  phone: Yup.number()  
    .required("1"),

  address: Yup.string()
    .required("1"),

  city: Yup.string()
    .required("1"),

  zip: Yup.number()
    .required("1")
});

export const BillingSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("1"),

  email: Yup.string()
    .email("1")  
    .required("1"),

  address: Yup.string()
    .required("1"),

  city: Yup.string()
    .required("1"),

  zip: Yup.number()
    .required("1")
});

export const PaymentSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("1"),

  number: Yup.string() 
    .length(19)
    .required("1"),

  date: Yup.number()
    .required("1"),

  code: Yup.number()
    .required("1")
});

