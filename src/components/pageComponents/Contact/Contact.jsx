// Styles
import s from "./Contact.module.css";
// General Components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";
// React Hooks
import { useRef } from "react";
// emailJS
import emailjs from "@emailjs/browser";
// Toastify for handling errors
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// error handling state (for styling)
import { toastStyleObject } from "../../../toastStyle";
//
//
// Function Component
const Contact = () => {
  // Initial state
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const subjectRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  //
  //
  // Function component
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
      toast("*** Todos los campos son obligatorios ***", toastStyleObject);
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
          console.log(result);
          nameRef.current.value = "";
          subjectRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          nameRef.current.focus();
          toast(
            "*** Tu mensaje me ha llegado. Pronto me pondré en contacto. :) ***",
            toastStyleObject
          );
        },
        (error) => {
          console.log(error.text);
          toast(error.text, toastStyleObject);
        }
      );
  };

  return (
    <div className={s.contactPageContainer}>
      <div className={s.topContainer}>
        <HomeButton />
      </div>
      <div className={s.bottomContainer}>
        <div className={s.contactFormContainer}>
          <form action="" className={s.contactForm} ref={formRef}>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              autocomplete="off"
              ref={nameRef}
            />
            <input
              type="text"
              placeholder="Tema"
              name="subject"
              autocomplete="off"
              ref={subjectRef}
            />
            <input
              type="text"
              placeholder="Correo eléctronico"
              name="email"
              autocomplete="off"
              ref={emailRef}
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Mensaje"
              ref={messageRef}
            ></textarea>
            <button onClick={handleUserData}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
