// Styles
import s from "./Contact.module.css";
//
// Dependencies
// Hooks
// React Hooks
import { useRef, useEffect } from "react";
//
// framer motion for animation
import { motion } from "framer-motion";
// emailJS
import emailjs from "@emailjs/browser";
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// error handling state (for styling)
import { toastStyleObject } from "../../../toastStyle";
//
// General Components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
//
// Function Component
// Function Component
// Function Component
const Contact = (props) => {
  // Aux functions
  // Scroll page back to top after navigating back
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  // Initial form state
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const subjectRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  //
  // Functions
  // hanldles send mesage
  // hanldles send mesage
  // hanldles send mesage
  const handleUserData = (e) => {
    e.preventDefault();
    // handleling form filling error
    if (
      nameRef.current.value === "" ||
      subjectRef.current.value === "" ||
      emailRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      nameRef.current.focus();
      toast("*** Todos los campos son obligatorios ***", toastStyleObject());
      return;
    }
    // Send data
    emailjs
      .sendForm(
        "service_b3bqjep", // service ID
        "template_ubefjka", // template ID
        formRef.current, // form data
        "7RhgiDzoqn1bPUjZk" // key
      )
      .then(
        (result) => {
          console.log("Success!! Result:", result);
          nameRef.current.value = "";
          subjectRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          nameRef.current.focus();
          toast(
            "*** Tu mensaje me ha llegado. Pronto me pondré en contacto. :) ***",
            toastStyleObject()
          );
        },
        (error) => {
          console.log("Failure. Error:", error);
          toast(error.text, toastStyleObject());
        }
      );
  };
  //
  // return statement
  // return statement
  // return statement
  return (
    // main container
    // main container
    // main container
    <div
      className={s.contactPageContainer}
      style={
        props.mobileState.isMobile && props.mobileState.showNavBar
          ? { display: "none" }
          : {}
      }
    >
      {/* top container */}
      {/* top container */}
      {/* top container */}
      <motion.div
        className={s.topContainer}
        initial={{
          opacity: 0,
          scale: 0.8,
          filter: "blur(20px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <HomeButton />
      </motion.div>
      {/* bottom container */}
      {/* bottom container */}
      {/* bottom container */}
      <motion.div
        key={
          props.mobileState.isMobile
            ? props.mobileState.showNavBar
              ? "navbar-open"
              : "navbar-closed"
            : "desktop"
        }
        className={s.bottomContainer}
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* form container */}
        {/* form container */}
        {/* form container */}
        <div className={s.contactFormContainer}>
          <form action="" className={s.contactForm} ref={formRef}>
            {/* name input */}
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              autocomplete="off"
              ref={nameRef}
            />
            {/* subject input */}
            <input
              type="text"
              placeholder="Tema"
              name="subject"
              autocomplete="off"
              ref={subjectRef}
            />
            {/* email input */}
            <input
              type="text"
              placeholder="Correo eléctronico"
              name="email"
              autocomplete="off"
              ref={emailRef}
            />
            {/* message text area */}
            <textarea
              name="message"
              rows="10"
              placeholder="Mensaje"
              ref={messageRef}
            ></textarea>
            {/* Submit btn */}
            <button onClick={handleUserData}>Enviar mensaje</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
