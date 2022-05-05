import React from "react";
import ContactForm from "../Components/Forms/ContactForm";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div>
      <div className="contact__left">
        {/* Heading and sub-heading */}
        <h3>Get Quote</h3>
        <p>
          Fill up the form and our team will get back to you within 24 hours
        </p>

        {/* icons and address */}
        <div className="contact__info">
          <div>
            <BsTelephone />
            <p>+25670 214 9571</p>
          </div>
          <div>
            <HiOutlineMail />
            <p>kubwakennels@gmail.com</p>
          </div>
          <div>
            <HiOutlineMail />
            <p>kubwakennels@gmail.com</p>
          </div>
          <div>
            <FiMapPin />
            <p>Jogo, Mukono</p>
          </div>
        </div>
      </div>
      <div className="contact__right">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
