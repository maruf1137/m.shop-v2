import React from "react";
import Title from "../components/Title";
import bgImg from "../images/bg-hero-1.jpg";

const Contacts = () => {
  return (
    <div className="contactPage">
      <div className="contact-title">
        <h2 className="heading">get in touch</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          velit asperiores sapiente quis possimus. Natus laborum aut dolorum
          minus sit.
        </p>
      </div>

      <div className="custom-container">
        <div className="contact">
          <div className="first-col mb-2">
            <input
              type="text"
              name="first name"
              placeholder="First name"
              className="contact__input"
            />
            <input
              type="text"
              name="last name"
              placeholder="last name"
              className="contact__input"
            />
          </div>
          <div className="second-col mb-2">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="contact__input"
            />
            <input
              type="phone"
              name="phone"
              placeholder="phone"
              className="contact__input"
            />
          </div>
          <input
            type="text"
            name="subject"
            className="contact__input mb-2"
            placeholder="subject"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="contact__input textarea mb-4"
            placeholder="write your message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
