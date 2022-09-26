import React from "react";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../../styles/contactStyle.scss";

function ContactForm() {
  // states
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Error Occured");

  // vars
  // emailjs vars
  var name;
  var email;
  var subject;
  var message;

  // refs
  const nameRef = useRef();
  const emailRef = useRef();
  const subRef = useRef();
  const msgRef = useRef();
  const formRef = useRef();

  //functions
  // clear form
  const clearForm = () => {
    formRef.current.reset();
  };

  const validateInput = (name, email, sub, msg) => {
    // strip html tags from name, sub and message
    name = name.replace(/<\/?[^>]+(>|$)/gi, "");
    sub = sub.replace(/<\/?[^>]+(>|$)/gi, "");
    msg = msg.replace(/<\/?[^>]+(>|$)/gi, "");

    // check name not empty
    if (name === "") {
      setErrorMsg("No name provided please provide a name.");
      setError(true);
      return false;
    }
    // check name not too short
    if (name.length < 2) {
      setErrorMsg("The name provided needs to be longer than two characters.");
      setError(true);
      nameRef.current.value = "";
      return false;
    }
    if (!email.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")) {
      setErrorMsg(
        "Email doesn't match any known email format, please update email."
      );
      setError(true);
      return false;
    }
    if (email === "") {
      setErrorMsg("No email has been provided, please provide an email.");
      setError(true);
      return false;
    }
    if (sub === "") {
      setErrorMsg(
        "No subject has been provided, please provide a message subject."
      );
      setError(true);
      return false;
    }
    if (sub.length < 3) {
      setError(true);
      setErrorMsg(
        "The subject provided needs to be longer than three characters."
      );
      return false;
    }
    if (msg.length < 5 || msg.length > 250) {
      setError(true);
      setErrorMsg(
        "The message provided needs to be longer than 5 characters and less than 250."
      );

      return false;
    }

    // pass validation
    setError(false);
    return true;
  };

  // form submit
  const onSubmit = async (e) => {
    e.preventDefault();
    name = e.target[0].value;
    email = e.target[1].value;
    subject = e.target[2].value;
    message = e.target[3].value;

    setSending(true);
    if (validateInput(name, email, subject, message)) {
      console.log("pass validation");
      try {
        const templateParams = { name, email, subject, message };

        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        );
        //clear form
        clearForm();
        setSending(false);
      } catch (error) {
        console.log(error);
        setSending(false);
      }
    } else {
      console.log("fail validation");
      setSending(false);
    }
  };

  return (
    <>
      <div className="contactForm">
        {error || sending ? (
          <div className="popup">
            {error && (
              <div className="formError">
                <p>An Error Occurred</p>
                <p>{errorMsg}</p>
                <button onClick={() => setError(false)}>ok</button>
              </div>
            )}

            {sending && (
              <div className="sendingMessage">
                <p>
                  Sending Message.. <br /> Please Wait..
                </p>
                <div className="loading"></div>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
        <form id="contact-form" ref={formRef} onSubmit={onSubmit} noValidate>
          <div className="formInput">
            <input
              type="text"
              name="name"
              placeholder="Enter Name.."
              required
              ref={nameRef}
              minLength={2}
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Enter Email.."
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              ref={emailRef}
            ></input>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject.."
              required
              ref={subRef}
              minLength={3}
            ></input>
            <textarea
              rows={3}
              name="message"
              placeholder="Enter Message.."
              required
              minLength={5}
              maxLength={250}
              ref={msgRef}
            ></textarea>
            <button className="formBtn" onClick={clearForm}>
              clear
            </button>
            <button
              className="formBtn"
              type="submit"
              disabled={error || sending}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
