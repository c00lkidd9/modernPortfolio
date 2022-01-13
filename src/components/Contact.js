import { Zoom } from "react-reveal";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Alert from "./Alert";
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setAlertMessage("Enter all required information.");
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } else {
      emailjs
        .sendForm(
          "service_3rsvh6p",
          "template_xhxzzes",
          form.current,
          "user_XjfVssXKgmtNkrLjSZWBC"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName("");
      setEmail("");
      setMessage("");
      setAlertMessage("Your message has been sent.");
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <div className="title">
        <div className="line"></div>
        <Zoom>
          <h2>Get In Touch</h2>
          <Alert message={alertMessage} show={show} />
        </Zoom>
      </div>
      <div className="contact-inner">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Your Name</label>
            <input
              value={name}
              type="text"
              name="user_name"
              className="form-control"
              placeholder="John doe"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Your Email</label>
            <input
              value={email}
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Johndoe@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Your Message</label>
            <textarea
              value={message}
              name="message"
              className="textarea-control"
              placeholder="Type your message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <input type="submit" value="Send Message" className="submit-btn" />
        </form>
        <div className="contact-right">
          <div>
            <AiOutlineMail />
            <span>Email: sohailbadghisi1@gmail.com</span>
          </div>
          <div>
            <AiFillPhone />
            <span>Phone: +93795085959</span>
          </div>
          <div>
            <GoLocation />
            <span>Location: Herat, Afghanistan</span>
          </div>
          <div className="upwork">
            <a href="#">Upwork Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
