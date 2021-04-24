import { Form, Formik } from "formik";
import React from "react";
import ContactForm from "../Form";
import ContactFormLayout from "../Form/styles";
import ContactLayoutContainer from "./styles";

interface Props {
  loadingFn: (loading: boolean) => void;
}

const Contact = ({ loadingFn }: Props) => {
  return (
    <ContactLayoutContainer
      imageURL={
        "https://firebasestorage.googleapis.com/v0/b/munay-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2F5-2.webp?alt=media"
      }
    >
      <ContactForm loadingFn={loadingFn} />
    </ContactLayoutContainer>
  );
};

export default Contact;
