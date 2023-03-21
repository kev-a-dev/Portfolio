import React from "react";
import "./Contact.css";

import message from "../assets/message.png";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h1 className="title">
          My <span>Contact</span>
        </h1>

        <div className="input-contact-info-container">
          {/* <div className="input-wrapper"> */}
          <form
            className="input-wrapper"
            action="https://formsubmit.co/97485503d5ee3537f112f171f471c1d8"
            method="POST"
          >
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              className="email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              className="message"
              placeholder="Message"
              required
            />
            <button className="send">Send</button>
          </form>
          {/* </div> */}

          <img src={message} alt="" className="mail-img" />
        </div>
      </div>
    </section>
  );
}
