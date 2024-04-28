import React, { useRef } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import ContactCard from "./component/ContactCard";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const contactCard = [
    {
      id: 1,
      icon: <MdEmail />,
      title: "Email",
      contactInfo: "shreyankmn21@gmail.com",
      cref: "mailto:shreyankmn21@gmail.com",
    },
    {
      id: 2,
      icon: <IoLogoWhatsapp />,
      title: "WhatsApp",
      contactInfo: "99xxxxxx16",
      cref: "https://api.whatsapp.com/send?phone=+919916430216",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_v6xbqos",
      "template_t76juw4",
      form.current,
      "T8DDvtEIV2dTTKNFh"
    );
    e.target.reset();
  };
  return (
    <section id="contact" className="contact__page">
      <h5>Get in touch</h5>
      <h1 className="contact__header">Contact Me</h1>
      <div className="contact__container">
        <div className="contact__cards">
          {contactCard.map(({ id, icon, title, contactInfo, cref }) => {
            return (
              <ContactCard
                key={id}
                icon={icon}
                title={title}
                contactInfo={contactInfo}
                cref={cref}
              />
            );
          })}
        </div>
        <div className="contact__form__container">
          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <input
              name="name"
              type="text"
              placeholder="Your full name"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={7}
              required
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
