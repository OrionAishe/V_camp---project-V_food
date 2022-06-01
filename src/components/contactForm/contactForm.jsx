import React, { useReducer } from "react";
import Modal from "../modal/modal";
import SubmitButton from "../submitButton";
import styles from "./contactForm.module.scss";

initialState = {
  sending: false,
  message: "",
  showModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SENDING":
      return { ...state, sending: true };
    case "SENT":
      return {
        ...state,
        sending: false,
        message: action.message,
        showModal: true,
      };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando");
    const form = e.target;
    const data = new FormData(form);
    const dataObject = Object.fromEntries(data.entries());
    dispatch({ type: "SENDING" });
    //make mock post request
    const postCallback = () => {
      console.table(dataObject);
      dispatch({ type: "SENT", message: "Message sent successfully!" });
    };
    setTimeout(() => postCallback(), 2000);
  };

  return (
    <section aria-labelledby="Contact Us Form">
      <h1 className={styles.sectionTitle}>Contact Us</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.contactForm_group}>
          <label className={styles.contactForm_Label} htmlFor="name">
            NAME
          </label>
          <input
            className={styles.contactForm_Input}
            type="text"
            name="name"
            placeholder="Enter your name..."
            required
          />
        </div>
        <div className={styles.contactForm_group}>
          <label className={styles.contactForm_Label} htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            className={styles.contactForm_Input}
            type="email"
            name="email"
            placeholder="Your email address..."
            required
          />
        </div>
        <div className={styles.contactForm_group}>
          <label className={styles.contactForm_Label} htmlFor="subject">
            SUBJECT
          </label>
          <input
            className={styles.contactForm_Input}
            type="text"
            name="subject"
            placeholder="Enter subject..."
            required
          />
        </div>
        <div className={styles.contactForm_group}>
          <label className={styles.contactForm_Label} htmlFor="enquiretype">
            ENQUIRY TYPE
          </label>
          <select
            className={styles.contactForm_Input}
            type="range"
            name="enquirytype"
            required
          >
            <option value="Advertising">Advertising</option>
            <option value="Request Information">Request Information</option>
            <option value="Complaining">Complaining</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        <div className={styles.contactForm_group}>
          <label className={styles.contactForm_Label} htmlFor="message">
            MESSAGE
          </label>
          <textarea
            className={styles.contactForm_textArea}
            name="message"
            placeholder="Enter your message..."
            cols="30"
            rows="10"
            required
          />
        </div>
        <SubmitButton sending={sending} />
        <Modal
          show={state.showModal}
          onClose={() => dispatch({ type: "CLOSE_MODAL" })}
          message={state.message}
        />
      </form>
    </section>
  );
};

export default ContactForm;
