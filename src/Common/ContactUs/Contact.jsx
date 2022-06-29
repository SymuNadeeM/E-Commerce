import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import emailjs from "emailjs-com";
import { useRef } from "react";
import "./style.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hrl6e5g",
        "template_sfw8xmd",
        form.current,
        "8QJv-uTG0jxtquoJk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section className="contact">
        <div className="title">
          <h1>Contact Us</h1>
        </div>
        <div className="container contact_container d_flex">
          <div className="con_left_side contact_options">
            <article className="contact_option">
              <HiOutlineMail className="conta_icons" />
              <h4>Email</h4>
              <h5>msymunnadeem@gmail.com</h5>
              <a href="mailto:msymunnadeem@gmail.com" target="_blank">
                Send me Messege
              </a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className="conta_icons" />
              <h4>Messenger</h4>
              <h5>Md.Symun Majumdar</h5>
              <a href="https://m.me/mdsymunmajumdar.nadeem.5" target="_blank">
                Send me Messege
              </a>
            </article>
            <article className="contact_option">
              <ImWhatsapp className="conta_icons" />
              <h4>Whatsapp</h4>
              <h5>+88 01537515034</h5>
              <a
                href="https://api.whatsapp.com/send?phone+8801537515034"
                target="_blank"
              >
                Send me Messege
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
            ></textarea>
            <button className="Send_button" type="submit">
              Send messages
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
